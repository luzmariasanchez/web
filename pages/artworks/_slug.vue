<template>
  <div>
    <template v-if="error">
      <Error :error="error"></Error>
    </template>
    <template v-else>
      <div class="w-full container mx-auto">
        <PageHead :page="item" :category="category"></PageHead>
        <LayoutPage :page="item" :category="category"></LayoutPage>
        <Author></Author>
      </div>
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
    return getHead(this.item, i18nHead);
  },
  async asyncData(context) {
    const categoryKey = 'artworks';
    const { page: category } = await loadContent(context, 'categories', categoryKey);
    const { page: item, error } = await loadContent(context, categoryKey, context.params.slug);
    return {
      item, error, category
    }
  },
}
</script>
