<template>
  <div class=" w-full">
    <img :src="url" :alt="alt" :style="{ width: '100%' }" class="rounded-lg">
  </div>
</template>

<script>

export default {
  name: "Banner",
  props: {
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
  },
}
</script>
