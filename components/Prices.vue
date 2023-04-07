<template>
  <div class="mb-20 text-center">
    <Subtitle :title="label || $t('content.prices')"></Subtitle>
    <div class="flex flex-wrap justify-center">
      <Price v-for="(price, priceIndex) in prices" :key="priceIndex" :price="price">
      </Price>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    prices: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: false
    },
  },
}
</script>
