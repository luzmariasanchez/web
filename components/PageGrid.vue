<template>

  <div>
    <div v-if="items.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <nuxt-link v-for="(item, itemIndex) in items" :key="itemIndex"
        :to="localePath({ name: pathName, params: { slug: item.slug } })"
        class="bg-white border rounded-lg overflow-hidden">
        <div class="relative pb-2/3">
          <img class="absolute h-full w-full object-cover" :src="item.image || '/images/default.jpg'" :alt="item.title">
        </div>
        <div class="p-6">
          <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ item.title }}</h4>
        </div>
      </nuxt-link>
    </div>
    <div v-else class="text-center p-3 ">
      Empty
    </div>
  </div>


</template>

<script>

export default {
  name: "PageGrid",
  props: {
    items: {
      type: Array,
      required: true,
    },
    pathName: {
      type: String,
      required: true,
    },
  },
}
</script>
