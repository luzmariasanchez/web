<template>
  <div>
    <PageHead :page="page"></PageHead>

    <!--Container-->
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">

      <div class="mx-0 sm:mx-6">
        <PageNav :page="page"></PageNav>

        <div class="bg-gray-200 w-full min-h-[50vh] leading-normal rounded-t p-6">
          <PageGrid :items="items" pathName="academia-slug"></PageGrid>
        </div>
        <Author></Author>
      </div>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";

export default {
  name: "academias",
  nuxtI18n: {
    paths: {
      en: "/academias",
      es: "/academicos",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  async asyncData({ $content, i18n }) {
    const page = await $content(i18n.locale, "pages", "academias").fetch();
    const items = await $content(i18n.locale, "academias").fetch();
    return {
      items,
      page
    };
  },
}
</script>
