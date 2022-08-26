<template>
  <div class="mb-3 text-left">
    <GalleryImage v-for="(image, imageIndex) in images" :key="imageIndex" :url="image"></GalleryImage>
  </div>
</template>

<script>

export default {
  name: "Gallery",
  props: {
    images: {
      type: Array,
      required: true
    },
  },
}
</script>
