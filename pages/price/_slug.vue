<template>
  <div class="w-full container mx-auto">
    <template v-if="error">
      <Message :text="$t('message.notFound')"></Message>
    </template>
    <template v-else>
      <Title :title="item.title" :description="item.type" :categorys="item.categorys"></Title>
      <div v-if="item.institution" class="text-center mb-8 text-gray-200">{{ item.institution }}</div>
      <PriceDetail :price="item"></PriceDetail>
      <Author></Author>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItem from "@/api/loadItem";
import loadItems from "@/api/loadItems";

export default {
  name: 'price-slug',
  nuxtI18n: {
    paths: {
      en: "/price/:slug",
      es: "/coleccion/:slug",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead({
      ...this.page,
      title: `${this.item ? this.item.title : 'Not found'} - ${this.page.title}`
    }, i18nHead);
  },
  async asyncData(context) {

    let page, error;
    try {
      page = await context.$content(context.i18n.locale, 'pages', 'prices').fetch();
    } catch (err) {
      error = err;
    }

    const { item, error: itemError } = await loadItem(context, 'prices', {
      slug: context.params.slug,
    });

    if (item) {
      const { items: works } = await loadItems(context, 'works', {
        page: 1,
        limit: 1000,
        sortField: 'start',
        sortDirection: 'desc',
        fields: ['slug', 'title', 'description', 'image', 'start', 'end', 'address', 'jury', 'url', 'urlLabel'],
        where: {
          prices: { $contains: item.slug }
        },
        relations: [{
          service: 'categorys',
          fields: ['title', 'slug', 'color'],
          many: true,
        }]
      });

      item.works = works;
    }

    return {
      page,
      item,
      error: error || itemError
    }
  },
}
</script>
