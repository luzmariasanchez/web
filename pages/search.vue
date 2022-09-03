<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <div class="relative mb-10">
      <form v-on:submit.prevent="handleSubmit">
        <span class="absolute inset-y-0 right-2 flex items-center pl-2">
          <button type="submit" class="p-1 text-white focus:outline-none">
            <i class="icon-search"></i>
          </button>
        </span>
        <input ref="input" type="text" name="search" placeholder="Type here..." :value="query"
          class="w-full px-4 py-3 border-2 placeholder:text-gray-800 text-white rounded-md outline-none placeholder:text-gray-200 bg-black focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 border-gray-600 focus:border-white ring-0" />
      </form>
    </div>
    <Grid :items="items"></Grid>
    <Author></Author>
  </div>
</template>

<script>
import { sortBy } from 'lodash';
import getHead from "@/helpers/head";
import loadList from "@/helpers/loadList";

export default {
  name: "search",
  nuxtI18n: {
    paths: {
      en: "/search",
      es: "/buscar",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  methods: {
    handleSubmit() {
      const queryValue = this.$refs.input.value;
      this.$router.push(this.localePath({ name: 'search', query: { q: queryValue } }))
    },
  },
  watchQuery: ['q'],
  async asyncData(context) {
    const page = await context.$content(context.i18n.locale, 'pages', 'search').fetch();
    let items = [];
    if (context.query.q) {
      const options = { limit: 6, query: context.query.q };
      const { items: academias } = await loadList(context, 'academias', options);
      const { items: artworks } = await loadList(context, 'artworks', options);
      const { items: exhibitions } = await loadList(context, 'exhibitions', options);
      const { items: publications } = await loadList(context, 'publications', options);
      const { items: researchs } = await loadList(context, 'researchs', options);
      items = sortBy([
        ...academias,
        ...artworks,
        ...exhibitions,
        ...publications,
        ...researchs,
      ], 'start').reverse();
    }
    return {
      page,
      items,
      query: context.query.q
    };
  },
}
</script>
