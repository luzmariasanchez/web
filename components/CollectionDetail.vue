<template>
  <div>
    <Banner v-if="collection.image" :url="collection.image" :alt="collection.title" class="mb-6"></Banner>
    <div class="w-full sm:w-3/5 mx-auto">
      <Dates v-if="collection.start" :start="collection.start" :end="collection.end"></Dates>
      <Address v-if="collection.address" :address="collection.address"></Address>
      <Content :page="collection"></Content>
      <div class="text-center" v-if="collection.url">
        <Url :url="collection.url" :label="collection.urlLabel || $t('content.link')"></Url>
      </div>
      <div class="mt-10">
        <Grid v-if="collection.works && collection.works.length" :items="collection.works" size="small"></Grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    collection: {
      type: Object,
      required: true,
    },
  },
}
</script>