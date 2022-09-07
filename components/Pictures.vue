<template>
  <div class="mb-20 text-center">
    <Subtitle :title="$t('content.pictures')"></Subtitle>
    <div class="leading-[0]">
      <div v-for="(picture, pictureIndex) in pictures" :key="pictureIndex"
        @click="onPictureClick(picture, pictureIndex)"
        class="inline-block cursor-pointer brightness-100 hover:brightness-150 transition">
        <Picture :url="picture"></Picture>
      </div>
    </div>
    <client-only>
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
        return this.pictures.map((picture) =>
          picture
          // require(`~/assets/images/snaps/large/${picture}`)
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
