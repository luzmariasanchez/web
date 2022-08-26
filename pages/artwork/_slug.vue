<template>
  <div>
    <template v-if="page">
      <LayoutPage :page="page" :category="category"></LayoutPage>
    </template>
    <template v-else>
      <Error :error="error"></Error>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadContent from "@/helpers/loadContent";

export default {
  name: 'artwork-slug',
  nuxtI18n: {
    paths: {
      en: "/artwork/:slug",
      es: "/proyecto/:slug",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  async asyncData(context) {
    const category = 'artworks';
    const { page, error } = await loadContent(context, category, context.params.slug);
    return {
      page, error, category
    }
  },
}
</script>
