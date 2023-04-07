<template>
  <div>
    <Banner v-if="page.image" :url="page.image" :alt="page.title" :legend="page.imageLegend" class="mb-6"></Banner>
    <div class="w-full sm:w-3/5 mx-auto">
      <Dates v-if="page.start" :start="page.start" :end="page.end"></Dates>
      <Info v-if="page.info" :info="page.info"></Info>
      <Content :page="page"></Content>
      <Tags v-if="page.tags && page.tags.length" :tags="page.tags"></Tags>
      <Places v-if="page.place" :place="page.place"></Places>
      <Collections v-if="page.collections && page.collections.length" :collections="page.collections"
        :label="page.collectionsLabel"></Collections>
      <Commissions v-if="page.commissions && page.commissions.length" :commissions="page.commissions"
        :label="page.commissionsLabel"></Commissions>
      <Guests v-if="page.guests && page.guests.length" :guests="page.guests" :label="page.guestsLabel"></Guests>
      <Sponsors v-if="page.sponsors && page.sponsors.length" :sponsors="page.sponsors" :label="page.sponsorsLabel">
      </Sponsors>
      <!-- PRIZE 
      GRANT 
      RESIDENCIA -->
      <Video v-if="page.video" :url="page.video"></Video>
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