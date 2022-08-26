<template>
  <div class="mb-3 text-center text-sm">
    {{ start }}<template v-if="end"> - {{ end }}</template>
  </div>
</template>

<script>

export default {
  name: "PageDates",
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
