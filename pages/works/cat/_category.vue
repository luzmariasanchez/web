<template>
  <div class="w-full container mx-auto">
    <template v-if="error">
      <Message text="Not found"></Message>
    </template>
    <template v-else>
      <Title :title="page.title" :description="page.description"></Title>
      <!-- <Nav>
      <template #left>
        <i class="icon-filter text-gray-300 mr-2"></i>
        <FilterTags :tags="tags" :pathName="`${category.slug}-tag-tag`"></FilterTags>
      </template>
    </Nav> -->
      <Grid :items="items"></Grid>
      <Pagination :pathName="'works'" :currentPage="+currentPagination" :totalPage="+totalPagination"></Pagination>
      <Author></Author>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";

export default {
  name: "works-cat-category",
  nuxtI18n: {
    paths: {
      en: "/works/cat/:category",
      es: "/proyectos/cat/:category",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  watchQuery: ['p'],
  async asyncData(context) {
    let page, error;
    try {
      page = await context.$content(context.i18n.locale, 'categorys', context.params.category).fetch();
    } catch (err) {
      error = err;
    }

    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'works', {
      page: context.query.p ? parseInt(context.query.p, 10) : 1,
      where: {
        categorys: { $contains: context.params.category }
      },
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
      error,
      page,
      items,
      currentPagination,
      totalPagination
    };
  },
}
</script>
