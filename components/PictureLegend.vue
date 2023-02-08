<template>
  <div class="fixed bottom-0 left-0 right-0 bg-black opacity-80 z-[1000000]">
    <div v-if="legend" class="p-2 text-gray-200 text-center">
      {{ legend }}
    </div>
  </div>
</template>

<script>

export default {
  name: "Content",
  props: {
    legend: {
      type: String,
      required: false
    },
  },
}
</script>
