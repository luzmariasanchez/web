<template>
  <div>
    <Banner v-if="price.image" :url="price.image" :alt="price.title" class="mb-6"></Banner>
    <div class="w-full sm:w-3/5 mx-auto">

      <Dates v-if="price.start" :start="price.start" :end="price.end"></Dates>
      <Address v-if="price.address" :address="price.address"></Address>
      <div v-if="price.category" class="text-center text-lg mb-8 text-gray-200">{{ price.category }}</div>
      <Content :page="price"></Content>
      <Url v-if="price.url" :url="price.url" :label="price.urlLabel || $t('content.link')"></Url>
      <div class="mt-10">
        <Grid v-if="price.works && price.works?.length" :prices="price.works" size="small"></Grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Object,
      required: true,
    },
  },
}
</script>