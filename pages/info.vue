<template>
  <div>
    <PageHead :page="page"></PageHead>

    <!--Container-->
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">

      <div class="mx-0 sm:mx-6 mt-12">
        <PageContent class="p-6 text-xl">
          <div class="markdown-content">
            <nuxt-content :document="page" />
          </div>
        </PageContent>
        <!-- <div class="text-center px-16 py-32">List of categories</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";

export default {
  name: "info",
  nuxtI18n: {
    paths: {
      en: "/info",
      es: "/info",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  async asyncData({ $content, i18n }) {
    const page = await $content(i18n.locale, "pages", "info").fetch();
    return {
      page
    };
  },
}
</script>
