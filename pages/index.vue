<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <GridHome :items="items"></GridHome>
    <Author></Author>
  </div>
</template>

<script>
import { sortBy } from 'lodash';
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";

export default {
  name: "index",
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead, {
      titleTemplate: "%s",
    });
  },
  async asyncData(context) {
    const page = await context.$content(context.i18n.locale, 'pages', 'index').fetch();
    const { items: academias } = await loadItems(context, 'academias', { limit: 3 });
    const { items: artworks } = await loadItems(context, 'artworks', { limit: 3 });
    const { items: exhibitions } = await loadItems(context, 'exhibitions', { limit: 3 });
    const { items: publications } = await loadItems(context, 'publications', { limit: 3 });
    const { items: researchs } = await loadItems(context, 'researchs', { limit: 3 });
    return {
      page,
      items: sortBy([
        ...academias,
        ...artworks,
        ...exhibitions,
        ...publications,
        ...researchs,
      ], 'start').reverse()
    };
  },
}
</script>
