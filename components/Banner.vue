<template>
  <div class=" w-full">
    <img :src="imager(url, 'bg')" :alt="alt" :style="{ width: '100%' }" class="rounded-lg">
  </div>
</template>

<script>
import imager from '~/helpers/imager';

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
  methods: {
    imager
  }
}
</script>
