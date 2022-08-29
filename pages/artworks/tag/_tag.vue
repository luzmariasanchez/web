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
  name: "artworks-tag-tag",
  nuxtI18n: {
    paths: {
      en: "/artworks/tag/:tag",
      es: "/proyectos/tag/:tag",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  async asyncData(context) {
    const pageKey = 'artworks';
    const { page, error } = await loadContent(context, 'pages', pageKey);
    const { page: tag, error: tagError } = await loadContent(context, 'tags', context.params.tag);
    console.log('tagError', tagError);
    const items = await context.$content(context.i18n.locale, pageKey).where({
      tags: { $contains: context.params.tag }
    }).fetch();
    const tags = await context.$content(context.i18n.locale, 'tags').fetch();
    return {
      page: {
        ...page,
        description: tag?.title
      },
      items,
      tags,
      error: tagError || error
    };
  },
}
</script>
