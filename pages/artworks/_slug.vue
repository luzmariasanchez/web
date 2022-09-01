<template>
  <div>
    <template v-if="error">
      <Error :error="error"></Error>
    </template>
    <template v-else>
      <div class="w-full container mx-auto">
        <Title :title="item.title" :description="item.description" :category="category"></Title>
        <Detail :page="item" :category="category"></Detail>
        <Author></Author>
      </div>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadContent from "@/helpers/loadContent";

export default {
  name: 'artworks-slug',
  nuxtI18n: {
    paths: {
      en: "/artwork/:slug",
      es: "/proyecto/:slug",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead({
      ...this.page,
      title: `${this.item.title} - ${this.category.title}`
    }, i18nHead);
  },
  async asyncData(context) {
    const categoryKey = 'artworks';
    const { page: category } = await loadContent(context, 'categorys', categoryKey);
    const { page: item, error } = await loadContent(context, categoryKey, context.params.slug);
    return {
      item, error, category
    }
  },
}
</script>
