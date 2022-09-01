<template>
  <div>
    <template v-if="error">
      <Error :error="error"></Error>
    </template>
    <template v-else>
      <div class="w-full container mx-auto">
        <Title :title="category.title" :description="tag.title"></Title>
        <PageNav>
          <template #left>
            <i class="icon-filter text-gray-300 mr-2"></i>
            <FilterTags :tags="tags" :pathName="`${category.slug}-tag-tag`"></FilterTags>
          </template>
        </PageNav>
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
  name: "publications-tag-tag",
  nuxtI18n: {
    paths: {
      en: "/publications/tag/:tag",
      es: "/publicaciones/tag/:tag",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead({
      ...this.page,
      title: `${this.tag.title} - ${this.category.title}`
    }, i18nHead);
  },
  async asyncData(context) {
    const categoryKey = 'publications';
    const { page: category, error } = await loadContent(context, 'categorys', categoryKey);
    const { page: tag, error: tagError } = await loadContent(context, 'tags', context.params.tag);
    const items = await context.$content(context.i18n.locale, categoryKey).where({
      tags: { $contains: context.params.tag }
    }).fetch();
    const tags = await context.$content(context.i18n.locale, 'tags').fetch();
    const itemsWithCategory = computed(() => {
      return items.map(item => ({
        ...item,
        category,
      }))
    })
    return {
      category,
      tag,
      items: itemsWithCategory.value,
      tags,
      error: tagError || error
    };
  },
}
</script>
