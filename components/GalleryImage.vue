<template>
  <figure>
    <img :src="url" :alt="alt" style="width:100%">
  </figure>
</template>

<script>

export default {
  name: "GalleryImage",
  props: {
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    },
  },
}
</script>
