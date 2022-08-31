<template>
  <div>
    <template v-if="error">
      <Error :error="error"></Error>
    </template>
    <template v-else>
      <div class="w-full container mx-auto">
        <PageHead :page="category"></PageHead>
        <PageGrid :items="items"></PageGrid>
        <Author></Author>
      </div>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadContent from "@/helpers/loadContent";
import { computed } from "vue";

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
    const categoryKey = 'artworks';
    const { page: category, error } = await loadContent(context, 'categories', categoryKey);
    const items = await context.$content(context.i18n.locale, categoryKey).fetch();
    const tags = await context.$content(context.i18n.locale, 'tags').fetch();
    const itemsWithCategory = computed(() => {
      return items.map(item => ({
        ...item,
        category,
      }))
    })
    return {
      category,
      items: itemsWithCategory.value,
      tags,
      error
    };
  },
}
</script>
