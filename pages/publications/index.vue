<template>
  <div>
    <PageHead :page="page"></PageHead>

    <!--Container-->
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">

      <div class="mx-0 sm:mx-6">
        <PageNav :page="page"></PageNav>

        <PageContent class="p-6">
          <PageGrid :items="items" pathName="publication-slug"></PageGrid>
        </PageContent>
        <PageAuthor></PageAuthor>
      </div>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";

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
    return getHead(this.page, i18nHead);
  },
  async asyncData({ $content, i18n }) {
    const page = await $content(i18n.locale, "pages", "publications").fetch();
    const items = await $content(i18n.locale, "publications").fetch();
    return {
      items,
      page
    };
  },
}
</script>
