<template>
  <nuxt-link :to="localePath({ name: `${item.category.slug}-slug`, params: { slug: item.slug } })" class="pb-5">
    <div class="rounded-lg overflow-hidden">
      <div class="relative pb-2/3">
        <img class="absolute h-full w-full object-cover hover:scale-110 transition-transform duration-500	ease-out"
          :src="imager(item.image, imageStore)" :alt="item.title">
      </div>
    </div>
    <div class="pt-4">
      <div class="text-xs uppercase mb-1" :style="{ color: item.category.color }">{{ item.category.title }}</div>
      <h4 class="text-white font-semibold text-lg mb-1">{{ item.title }}</h4>
      <div class="text-gray-400 text-sm">{{ item.description }}</div>
    </div>
  </nuxt-link>
</template>

<script>
import imager from '~/helpers/imager';

export default {
  name: "Bloc",
  props: {
    item: {
      type: Object,
      required: true
    },
    imageStore: {
      type: String,
      required: false,
      default() {
        return 'medium';
      }
    },
  },
  methods: {
    imager
  }
}
</script>
