<template>
  <div>
    <Banner v-if="commission.image" :url="commission.image" :alt="commission.title" class="mb-6"></Banner>
    <div class="w-full sm:w-3/5 mx-auto">
      <Dates v-if="commission.start" :start="commission.start" :end="commission.end"></Dates>
      <Address v-if="commission.address" :address="commission.address"></Address>
      <Content :page="commission"></Content>
      <Url v-if="commission.url" :url="commission.url" :label="commission.urlLabel || $t('content.link')"></Url>
      <Section v-if="commission.jury" :content="commission.jury" :title="commission.juryLabel || $t('content.jury')">
      </Section>
      <div class="mt-10">
        <Grid v-if="commission.works && commission.works.length" :items="commission.works" size="small"></Grid>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    commission: {
      type: Object,
      required: true,
    },
  },
}
</script>