<template>
  <NuxtLink :to="localePath({ name: `price-slug`, params: { slug: price.slug } })">
    <div class="text-center text-sm text-gray-200">
      {{ price.title }}
    </div>
  </NuxtLink>
</template>

<script>

export default {
  props: {
    price: {
      type: Object,
      required: true
    },
  },
}
</script>
