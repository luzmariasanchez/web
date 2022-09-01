<template>

  <div class="w-full">
    <div class="text-center pt-10 pb-10">
      <div v-if="category" class="text-xs uppercase mb-2" :style="{ color: category.color }">{{  category.title  }}</div>
      <h1 class="text-white font-bold text-3xl md:text-5xl">
        {{  title  }}
      </h1>
      <p class="text-lg text-gray-500 mt-2" v-if="description">{{  description  }}</p>
    </div>
  </div>

</template>

<script>

export default {
  name: "Title",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    category: {
      type: Object,
      required: false,
    },
  },
}
</script>
