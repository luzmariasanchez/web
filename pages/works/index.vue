<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <Nav>
      <template #left>
        <i class="icon-filter text-gray-300 mr-2"></i>
        <FilterTags></FilterTags>
      </template>
    </Nav>
    <Grid :items="items"></Grid>
    <Pagination :pathName="'works'" :currentPage="+currentPagination" :totalPage="+totalPagination"></Pagination>
    <Author></Author>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";

export default {
  name: "works",
  nuxtI18n: {
    paths: {
      en: "/works",
      es: "/proyectos",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  watchQuery: ['p'],
  async asyncData(context) {
    const page = await context.$content(context.i18n.locale, 'pages', 'works').fetch();
    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'works', {
      page: context.query.p ? parseInt(context.query.p, 10) : 1,
      limit: 6,
      sortField: 'start',
      sortDirection: 'desc',
      fields: ['slug', 'title', 'description', 'image', 'start', 'categorys'],
      relations: [{
        service: 'categorys',
        fields: ['title', 'slug', 'color'],
      }]
    });
    return {
      page,
      items,
      currentPagination,
      totalPagination
    };
  },
}
</script>
