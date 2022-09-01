<template>

  <div>
    <div v-if="items.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <nuxt-link v-for="(item, itemIndex) in items" :key="itemIndex"
        :to="localePath({ name: `${item.category.slug}-slug`, params: { slug: item.slug } })">
        <div class="rounded-lg overflow-hidden">
          <div class="relative pb-2/3">
            <img class="absolute h-full w-full object-cover hover:scale-110 transition-transform duration-500	ease-out"
              :src="item.image || '/images/default.jpg'" :alt="item.title">
          </div>
        </div>
        <div class="pt-4">
          <div class="text-xs uppercase mb-1" :style="{ color: item.category.color }">{{  item.category.title  }}</div>
          <h4 class="text-white font-semibold text-lg mb-1">{{  item.title  }}</h4>
          <div class="text-gray-400 text-sm">{{  item.description  }}</div>
        </div>
      </nuxt-link>
    </div>
    <template v-else>
      <Message text="Empty"></Message>
    </template>
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
  },
}
</script>
