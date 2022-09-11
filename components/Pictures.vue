<template>
  <div class="mb-20 text-center">
    <Subtitle :title="$t('content.pictures')"></Subtitle>
    <client-only>
      <masonry :cols="{ default: 4, 1200: 4, 1000: 3, 720: 3, 580: 2, 400: 2 }" :gutter="8">
        <div v-for="(picture, pictureIndex) in pictures" :key="pictureIndex"
          @click="onPictureClick(picture, pictureIndex)"
          class="cursor-pointer brightness-100 hover:brightness-125 transition mb-2">
          <Picture :url="picture"></Picture>
        </div>
      </masonry>
      <v-gallery :images="galleryImages" :index="galleryIndex" @close="galleryIndex = null"></v-gallery>
    </client-only>
  </div>
</template>

<script>

export default {
  name: "Pictures",
  props: {
    pictures: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      galleryIndex: null,
    };
  },
  computed: {
    galleryImages() {
      if (this.pictures)
        return this.pictures.map((picture) => this.$imager(picture, 'full')
        );
      return [];
    },
  },
  methods: {
    onPictureClick(item, index) {
      this.galleryIndex = index;
    },
  },
}
</script>
