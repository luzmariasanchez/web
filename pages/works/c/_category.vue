<template>
  <div class="w-full container mx-auto">
    <template v-if="error">
      <Message :text="$t('message.notFound')"></Message>
    </template>
    <template v-else>
      <Title :title="page.title" :description="page.description"></Title>
      <Nav>
        <template #left>
          <i class="icon-filter text-gray-300 mr-2"></i>
          <FilterTags></FilterTags>
        </template>
      </Nav>
      <Grid :items="items"></Grid>
      <Pagination :pathName="'works-c-category'" :currentPage="+currentPagination" :totalPage="+totalPagination">
      </Pagination>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";

export default {
  name: "works-c-category",
  nuxtI18n: {
    paths: {
      en: "/works/c/:category",
      es: "/proyectos/c/:category",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  watchQuery: ['p'],
  async asyncData(context) {
    let page, error, category;
    try {
      page = await context.$content(context.i18n.locale, 'pages', 'works').fetch();
    } catch (err) {
      error = err;
    }
    try {
      category = await context.$content(context.i18n.locale, 'categorys', context.params.category).fetch();
    } catch (err) {
      error = err;
    }

    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'works', {
      page: context.query.p ? parseInt(context.query.p, 10) : 1,
      where: {
        categorys: { $contains: context.params.category }
      },
      limit: 24,
      sortField: 'start',
      sortDirection: 'desc',
      fields: ['slug', 'title', 'description', 'image', 'start', 'categorys'],
      relations: [{
        service: 'categorys',
        fields: ['title', 'slug', 'color'],
        many: true,
      }]
    });
    return {
      error,
      page: {
        ...(category || {})
      },
      items,
      currentPagination,
      totalPagination
    };
  },
}
</script>
