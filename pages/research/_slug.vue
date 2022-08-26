<template>
  <div>
    <PageHead :page="page"></PageHead>

    <!--Container-->
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">

      <div class="mx-0 sm:mx-6 mt-12">
        <div class="bg-gray-200 w-full min-h-[50vh] leading-normal rounded-t p-6">
          <div class="pb-10">
            <nuxt-content :document="page" />
          </div>
          <PageList v-if="artworks" :items="artworks" title="Artworks" pathName="artworks-slug" />
          <PageList v-if="exhibitions" :items="exhibitions" title="Exhibitions" pathName="exhibitions-slug" />
          <PageList v-if="academias" :items="academias" :title="$t('page.academias')" pathName="academias-slug" />
          <PageList v-if="researchs" :items="researchs" :title="$t('page.researchs')" pathName="researchs-slug" />
          <PageList v-if="publications" :items="publications" :title="$t('page.publications')"
            pathName="publications-slug" />
        </div>
        <PageAuthor></PageAuthor>
      </div>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";

export default {
  name: 'research-slug',
  nuxtI18n: {
    paths: {
      en: "/research/:slug",
      es: "/investigacion/:slug",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  async asyncData({ $content, i18n, params }) {

    const page = await $content(i18n.locale, 'researchs', params.slug).fetch();
    const artworks = page.artworks && await $content(i18n.locale, "artworks")
      .where({ slug: { $in: page.artworks } })
      .only(["title", "description", "image", "slug"])
      .fetch();
    const exhibitions = page.exhibitions && await $content(i18n.locale, "exhibitions")
      .where({ slug: { $in: page.exhibitions } })
      .only(["title", "description", "image", "slug"])
      .fetch();
    const academias = page.academias && await $content(i18n.locale, "academias")
      .where({ slug: { $in: page.academias } })
      .only(["title", "description", "image", "slug"])
      .fetch();
    const researchs = page.researchs && await $content(i18n.locale, "researchs")
      .where({ slug: { $in: page.researchs } })
      .only(["title", "description", "image", "slug"])
      .fetch();
    const publications = page.publications && await $content(i18n.locale, "publications")
      .where({ slug: { $in: page.publications } })
      .only(["title", "description", "image", "slug"])
      .fetch();

    return {
      page,
      artworks,
      exhibitions,
      academias,
      researchs,
      publications
    };
  },
}
</script>
