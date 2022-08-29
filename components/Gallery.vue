<template>
  <div class="mb-6 text-center">
    <h4 class="text-xs font-semibold uppercase mb-2">
      Gallery
    </h4>
    <div class="leading-[0]">
      <GalleryImage v-for="(image, imageIndex) in images" :key="imageIndex" :url="image"></GalleryImage>
    </div>
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
