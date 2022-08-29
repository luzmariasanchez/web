<template>
  <div class="absolute -top-7 text-center w-full">
    <div class="inline-block bg-gray-200 px-3 py-1 text-sm rounded-t-lg opacity-80">
      {{  start  }}<template v-if="end"> - {{  end  }}</template>
    </div>
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
