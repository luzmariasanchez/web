<template>
  <div>
    <template v-if="error">
      <Error :error="error"></Error>
    </template>
    <template v-else>
      <LayoutGrid :page="page" :items="items" :tags="tags" category="artwork"></LayoutGrid>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadContent from "@/helpers/loadContent";

export default {
  name: "artworks",
  nuxtI18n: {
    paths: {
      en: "/artworks",
      es: "/proyectos",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  async asyncData(context) {
    const pageKey = 'artworks';
    const { page, error } = await loadContent(context, 'pages', pageKey);
    const items = await context.$content(context.i18n.locale, pageKey).fetch();
    const tags = await context.$content(context.i18n.locale, 'tags').fetch();
    return {
      page,
      items,
      tags,
      error
    };
  },
}
</script>
