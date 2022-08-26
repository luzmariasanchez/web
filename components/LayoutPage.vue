<template>
  <div>
    <PageHead :page="page"></PageHead>
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div class="mx-0 sm:mx-6 mt-12">
        <div class="bg-gray-200 w-full min-h-[50vh] leading-normal rounded-t">

          <div class="flex flex-wrap">
            <div class="w-full sm:w-1/2 md:w-2/3 p-6">
              <PageTags v-if="page.tags && page.tags.length" :tags="page.tags" :category="category"></PageTags>
              <div class="markdown-content">
                <nuxt-content :document="page" />
              </div>
            </div>
            <div class="w-full sm:w-1/2 md:w-1/3 p-6">
              <PageDates v-if="page.start" :start="page.start" :end="page.end"></PageDates>
              <PageInfo v-if="page.info" :info="page.info"></PageInfo>
              <PageVideo v-if="page.video" :url="page.video"></PageVideo>
              <PagePlace v-if="page.place" :place="page.place"></PagePlace>
              <PageSponsors v-if="page.sponsors && page.sponsors.length" :sponsors="page.sponsors"></PageSponsors>
              <PageGuests v-if="page.guests && page.guests.length" :guests="page.guests"></PageGuests>
              <Gallery v-if="page.images && page.images.length" :images="page.images"></Gallery>
            </div>
          </div>

          <div class="flex flex-wrap">
            <div class="w-full p-6">
              <PageList v-if="page.artworks && page.artworks.length" :items="page.artworks" :title="$t('page.artworks')"
                pathName="artwork-slug" />
              <PageList v-if="page.exhibitions && page.exhibitions.length" :items="page.exhibitions"
                :title="$t('page.exhibitions')" pathName="exhibition-slug" />
              <PageList v-if="page.academias && page.academias.length" :items="page.academias"
                :title="$t('page.academias')" pathName="academia-slug" />
              <PageList v-if="page.researchs && page.researchs.length" :items="page.researchs"
                :title="$t('page.researchs')" pathName="research-slug" />
              <PageList v-if="page.publications && page.publications.length" :items="page.publications"
                :title="$t('page.publications')" pathName="publication-slug" />
            </div>
          </div>

        </div>
        <PageAuthor></PageAuthor>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLayout",
  props: {
    page: {
      type: Object,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
}
</script>