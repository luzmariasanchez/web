<template>
  <div>
    <PageImage v-if="page.image" :url="page.image" :alt="page.title" class="mb-6"></PageImage>
    <div class="w-3/5 mx-auto">
      <PageDates v-if="page.start" :start="page.start" :end="page.end"></PageDates>
      <PageInfo v-if="page.info" :info="page.info"></PageInfo>
      <PageContent :page="page"></PageContent>
      <PageTags v-if="page.tags && page.tags.length" :tags="page.tags" :category="category"></PageTags>
      <PageVideo v-if="page.video" :url="page.video"></PageVideo>
      <PagePlace v-if="page.place" :place="page.place"></PagePlace>
      <PageGuests v-if="page.guests && page.guests.length" :guests="page.guests"></PageGuests>
      <PageSponsors v-if="page.sponsors && page.sponsors.length" :sponsors="page.sponsors"></PageSponsors>
      <PagePictures v-if="page.pictures && page.pictures.length" :pictures="page.pictures"></PagePictures>
      <PageList v-if="page.artworks && page.artworks.length" :items="page.artworks" :title="$t('page.artworks')"
        pathName="artwork-slug" />
      <PageList v-if="page.exhibitions && page.exhibitions.length" :items="page.exhibitions"
        :title="$t('page.exhibitions')" pathName="exhibition-slug" />
      <PageList v-if="page.academias && page.academias.length" :items="page.academias" :title="$t('page.academias')"
        pathName="academia-slug" />
      <PageList v-if="page.researchs && page.researchs.length" :items="page.researchs" :title="$t('page.researchs')"
        pathName="research-slug" />
      <PageList v-if="page.publications && page.publications.length" :items="page.publications"
        :title="$t('page.publications')" pathName="publication-slug" />
    </div>

  </div>
</template>

<script>
export default {
  name: "LayoutPage",
  props: {
    page: {
      type: Object,
      required: true,
    },
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>