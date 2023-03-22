<template>
  <div class="w-full container mx-auto">
    <template v-if="error">
      <Message :text="$t('message.notFound')"></Message>
    </template>
    <template v-else>
      <Title :title="item.title" :description="item.description" :categorys="item.categorys"></Title>
      <!-- <Detail :page="item"></Detail> -->
      <Author></Author>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItem from "@/api/loadItem";

export default {
  name: 'collection-slug',
  nuxtI18n: {
    paths: {
      en: "/collection/:slug",
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
      page = await context.$content(context.i18n.locale, 'pages', 'collections').fetch();
    } catch (err) {
      error = err;
    }

    const { item, error: itemError } = await loadItem(context, 'collections', {
      slug: context.params.slug,
    });

    return {
      page,
      item,
      error: error || itemError
    }
  },
}
</script>
