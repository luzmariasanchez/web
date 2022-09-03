<template>
  <div>
    <template v-if="error">
      <Error :error="error"></Error>
    </template>
    <template v-else>
      <div class="w-full container mx-auto">
        <Title :title="category.title" :description="tag.title"></Title>
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
import { computed } from "vue";

export default {
  name: "exhibitions-tag-tag",
  nuxtI18n: {
    paths: {
      en: "/exhibitions/tag/:tag",
      es: "/eventos/tag/:tag",
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
    const categoryKey = 'exhibitions';
    const { page: category, error } = await loadContent(context, 'categorys', categoryKey);
    const { page: tag, error: tagError } = await loadContent(context, 'tags', context.params.tag);
    const items = await context.$content(context.i18n.locale, categoryKey).where({
      tags: { $contains: context.params.tag }
    }).fetch();
    const tags = await context.$content(context.i18n.locale, 'tags').fetch();

    return {
      category,
      tag,
      items: items.map(item => ({
        ...item,
        category,
      })),
      tags,
      error: tagError || error
    };
  },
}
</script>
