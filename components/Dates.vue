<template>
  <div class="text-center w-full text-gray-200 text-sm mb-6">
    {{ start }}<template v-if="end"> - {{ end }}</template>
  </div>
</template>

<script>

export default {
  name: "Dates",
  props: {
    start: {
      type: Number,
      required: true
    },
    end: {
      type: Number,
      required: false
    }
  },
}
</script>
