<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <CheckItems :items="items" :schema="schema" :options="{ relations }" :route="route"></CheckItems>
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
      schema,
      route: {
        name: 'work-slug',
        param: 'slug'
      }
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
      condition: {},
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
        'prizes',
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
    const places = await context.$content(context.i18n.locale, 'places').only(['slug']).fetch();
    const categorys = await context.$content(context.i18n.locale, 'categorys').only(['slug']).fetch();
    const tags = await context.$content(context.i18n.locale, 'tags').only(['slug']).fetch();
    const collections = await context.$content(context.i18n.locale, 'collections').only(['slug']).fetch();
    const commissions = await context.$content(context.i18n.locale, 'commissions').only(['slug']).fetch();
    const grants = await context.$content(context.i18n.locale, 'grants').only(['slug']).fetch();
    const prizes = await context.$content(context.i18n.locale, 'prizes').only(['slug']).fetch();
    const residencys = await context.$content(context.i18n.locale, 'residencys').only(['slug']).fetch();
    const sponsors = await context.$content(context.i18n.locale, 'sponsors').only(['slug']).fetch();
    const guests = await context.$content(context.i18n.locale, 'guests').only(['slug']).fetch();
    const works = await context.$content(context.i18n.locale, 'works').only(['slug']).fetch();
    const relations = {
      places: extractSlugs(places),
      categorys: extractSlugs(categorys),
      tags: extractSlugs(tags),
      collections: extractSlugs(collections),
      commissions: extractSlugs(commissions),
      grants: extractSlugs(grants),
      prizes: extractSlugs(prizes),
      residencys: extractSlugs(residencys),
      sponsors: extractSlugs(sponsors),
      guests: extractSlugs(guests),
      works: extractSlugs(works),
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
