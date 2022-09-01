<template>
  <div>
    <Banner v-if="page.image" :url="page.image" :alt="page.title" class="mb-6"></Banner>
    <div class="w-3/5 mx-auto">
      <Dates v-if="page.start" :start="page.start" :end="page.end"></Dates>
      <Info v-if="page.info" :info="page.info"></Info>
      <Content :page="page"></Content>
      <Tags v-if="page.tags && page.tags.length" :tags="page.tags" :category="category"></Tags>
      <Video v-if="page.video" :url="page.video"></Video>
      <Places v-if="page.place" :place="page.place"></Places>
      <Guests v-if="page.guests && page.guests.length" :guests="page.guests"></Guests>
      <Sponsors v-if="page.sponsors && page.sponsors.length" :sponsors="page.sponsors"></Sponsors>
      <Pictures v-if="page.pictures && page.pictures.length" :pictures="page.pictures"></Pictures>
      <List v-if="page.artworks && page.artworks.length" :items="page.artworks" :title="$t('page.artworks')"
        pathName="artworks-slug" />
      <List v-if="page.exhibitions && page.exhibitions.length" :items="page.exhibitions" :title="$t('page.exhibitions')"
        pathName="exhibitions-slug" />
      <List v-if="page.academias && page.academias.length" :items="page.academias" :title="$t('page.academias')"
        pathName="academias-slug" />
      <List v-if="page.researchs && page.researchs.length" :items="page.researchs" :title="$t('page.researchs')"
        pathName="researchs-slug" />
      <List v-if="page.publications && page.publications.length" :items="page.publications"
        :title="$t('page.publications')" pathName="publications-slug" />
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