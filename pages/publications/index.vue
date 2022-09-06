<template>
  <div>
    <template v-if="error">
      <Error :error="error"></Error>
    </template>
    <template v-else>
      <div class="w-full container mx-auto">
        <Title :title="category.title"></Title>
        <Nav>
          <template #left>
            <i class="icon-filter text-gray-300 mr-2"></i>
            <FilterTags :tags="tags" :pathName="`${category.slug}-tag-tag`"></FilterTags>
          </template>
        </Nav>
        <Grid :items="items"></Grid>
        <Author></Author>
      </div>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadContent from "@/helpers/loadContent";

export default {
  name: "publications",
  nuxtI18n: {
    paths: {
      en: "/publications",
      es: "/publicaciones",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.category, i18nHead);
  },
  async asyncData(context) {
    const categoryKey = 'publications';
    const { page: category, error } = await loadContent(context, 'categorys', categoryKey);
    const items = await context.$content(context.i18n.locale, categoryKey)
      .sortBy(['start', 'desc'])
      .only(['slug', 'title', 'description', 'image', 'start'])
      .fetch();
    const tags = await context.$content(context.i18n.locale, 'tags')
      .sortBy(['slug', 'asc'])
      .only(['slug', 'title'])
      .fetch();

    return {
      category,
      items: items.map(item => ({
        ...item,
        category,
      })),
      tags,
      error
    };
  },
}
</script>
