<template>
  <div>
    <template v-if="categorys">
      <div v-for="(category, categoryIndex) in categorys" :key="categoryIndex"
        class="inline-block mr-2 text-xs uppercase mb-1" :style="{ color: category.color }">{{
        category.title }}</div>
    </template>
  </div>
</template>

<script>

export default {
  name: "Categorys",
  props: {
    categorys: {
      type: Array,
      required: false
    },
  },
}
</script>
