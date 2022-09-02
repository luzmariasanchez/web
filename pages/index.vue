<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <GridHome :items="items"></GridHome>
    <Author></Author>
  </div>
</template>

<script>
import { computed } from "vue";
import { sortBy } from 'lodash';
import getHead from "@/helpers/head";
import loadList from "@/helpers/loadList";

export default {
  name: "IndexPage",
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead, {
      titleTemplate: "%s",
    });
  },
  async asyncData(context) {
    const page = await context.$content(context.i18n.locale, 'pages', 'index').fetch();
    const { items: academias } = await loadList(context, 'academias');
    const { items: artworks } = await loadList(context, 'artworks');
    const { items: exhibitions } = await loadList(context, 'exhibitions');
    const { items: publications } = await loadList(context, 'publications');
    const { items: researchs } = await loadList(context, 'researchs');
    const items = computed(() => {
      return sortBy([
        ...academias.value,
        ...artworks.value,
        ...exhibitions.value,
        ...publications.value,
        ...researchs.value,
      ], 'start').reverse()
    })
    return {
      page,
      items: items.value
    };
  },
}
</script>
