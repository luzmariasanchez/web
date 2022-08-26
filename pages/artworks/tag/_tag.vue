<template>
  <div>
    <template v-if="page">
      <LayoutGrid :page="page" :items="items" :tags="tags" category="artwork"></LayoutGrid>
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
    const items = await context.$content(context.i18n.locale, pageKey).where({
      tags: { $contains: context.params.tag }
    }).fetch();
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
