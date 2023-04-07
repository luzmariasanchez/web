<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <CheckItems :items="items" :schema="schema" :options="{ relations }" :route="route"></CheckItems>
    <Pagination :pathName="'check-commissions'" :currentPage="+currentPagination" :totalPage="+totalPagination">
    </Pagination>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";
import schema from "@/schemas/commissions";

export default {
  name: "check-commissions",
  nuxtI18n: {
    paths: {
      en: "/check/commissions",
      es: "/check/commissions",
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
        name: 'index',
        param: 'none'
      }
    }
  },
  watchQuery: ['p'],
  async asyncData(context) {
    const page = {
      title: 'Check commissions'
    }
    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'commissions', {
      page: context.query.p ? parseInt(context.query.p, 10) : 1,
      limit: 1000,
      condition: {},
      fields: [
        'slug',
        'title',
        'offline',
        'address',
        'jury',
        'year',
        'url',
        'image',
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
