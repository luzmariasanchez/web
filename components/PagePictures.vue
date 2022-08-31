<template>
  <div class="mb-20 text-center">
    <Subtitle :title="'Pictures'"></Subtitle>
    <div class="leading-[0]">
      <Picture v-for="(picture, pictureIndex) in pictures" :key="pictureIndex" :url="picture"></Picture>
    </div>
  </div>
</template>

<script>

export default {
  name: "PagePictures",
  props: {
    pictures: {
      type: Array,
      required: true
    },
  },
}
</script>
