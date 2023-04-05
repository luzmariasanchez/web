<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <CheckItems :items="items" :schema="schema" :options="{ relations }"></CheckItems>
    <Pagination :pathName="'check-works'" :currentPage="+currentPagination" :totalPage="+totalPagination"></Pagination>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";
import schema from "@/schemas/works";

function extractSlugs(items) {
  return items.map(item => (item.slug))
}

export default {
  name: "check-works",
  nuxtI18n: {
    paths: {
      en: "/check/works",
      es: "/check/proyectos",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  data() {
    return {
      schema
    }
  },
  watchQuery: ['p'],
  async asyncData(context) {
    const page = {
      title: 'Check Works'
    }
    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'works', {
      page: context.query.p ? parseInt(context.query.p, 10) : 1,
      limit: 1000,
      sortField: 'start',
      sortDirection: 'desc',
      fields: [
        'slug',
        'offline',
        'private',
        'title',
        'description',
        'image',
        'imageLegend',
        'video',
        'start',
        'end',
        'info',
        'place',
        'categorys',
        'tags',
        'collections',
        'commissions',
        'grants',
        'prices',
        'residencys',
        'sponsorsLabel',
        'sponsors',
        'guestsLabel',
        'guests',
        'works',
        'pictures',
      ],
    });

    // relations
    let places = await context.$content(context.i18n.locale, 'places')
      .only(['slug'])
      .fetch();
    const relations = {
      places: extractSlugs(places)
    }
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
