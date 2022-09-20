<template>
  <div>
    <Banner v-if="page.image" :url="page.image" :alt="page.title" class="mb-6"></Banner>
    <div class="w-full sm:w-3/5 mx-auto">
      <Dates v-if="page.start" :start="page.start" :end="page.end"></Dates>
      <Info v-if="page.info" :info="page.info"></Info>
      <Content :page="page"></Content>
      <Tags v-if="page.tags && page.tags.length" :tags="page.tags"></Tags>
      <Video v-if="page.video" :url="page.video"></Video>
      <Places v-if="page.place" :place="page.place"></Places>
      <Guests v-if="page.guests && page.guests.length" :guests="page.guests"></Guests>
      <Sponsors v-if="page.sponsors && page.sponsors.length" :sponsors="page.sponsors"></Sponsors>
      <Pictures v-if="page.pictures && page.pictures.length" :pictures="page.pictures"></Pictures>
      <Relateds v-if="page.works && page.works.length" :items="page.works"></Relateds>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
}
</script>