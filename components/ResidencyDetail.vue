<template>
  <div>
    <Banner v-if="residency.image" :url="residency.image" :alt="residency.title" class="mb-6"></Banner>
    <div class="w-full sm:w-3/5 mx-auto">
      <Dates v-if="residency.start" :start="residency.start" :end="residency.end"></Dates>
      <Address v-if="residency.address" :address="residency.address"></Address>
      <Content :page="residency"></Content>
      <div v-if="residency.url">
        <Url :url="residency.url" :label="residency.urlLabel || $t('content.link')"></Url>
      </div>
      <div class="mt-10">
        <Grid v-if="residency.works && residency.works.length" :items="residency.works" size="small"></Grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    residency: {
      type: Object,
      required: true,
    },
  },
}
</script>