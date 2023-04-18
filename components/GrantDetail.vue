<template>
  <div>
    <Banner v-if="grant.image" :url="grant.image" :alt="grant.title" class="mb-6"></Banner>
    <div class="w-full sm:w-3/5 mx-auto">
      <Dates v-if="grant.start" :start="grant.start" :end="grant.end"></Dates>
      <Address v-if="grant.address" :address="grant.address"></Address>
      <Content :page="grant"></Content>
      <Url v-if="grant.url" :url="grant.url" :label="grant.urlLabel || $t('content.link')"></Url>
      <div class="mt-10">
        <Grid v-if="grant.works && grant.works.length" :items="grant.works" size="small"></Grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    grant: {
      type: Object,
      required: true,
    },
  },
}
</script>