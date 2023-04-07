<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <CheckItems :items="items" :schema="schema" :options="{ relations }" :route="route"></CheckItems>
    <Pagination :pathName="'check-categorys'" :currentPage="+currentPagination" :totalPage="+totalPagination">
    </Pagination>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";
import schema from "@/schemas/categorys";

export default {
  name: "check-categorys",
  nuxtI18n: {
    paths: {
      en: "/check/categorys",
      es: "/check/categorias",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  data() {
    return {
      schema,
      route: {
        name: 'works-c-category',
        param: 'category'
      }
    }
  },
  watchQuery: ['p'],
  async asyncData(context) {
    const page = {
      title: 'Check categorys'
    }
    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'categorys', {
      page: context.query.p ? parseInt(context.query.p, 10) : 1,
      limit: 1000,
      condition: {},
      fields: [
        'slug',
        'offline',
        'color',
        'title',
        'order',
      ],
    });

    // relations
    const relations = {}
    return {
      page,
      items,
      relations,
      currentPagination,
      totalPagination,
    };
  },
}
</script>
