<template>
  <a :href="url" target="_blank"
    class="bg-transparent border border-gray-500 hover:border-white text-xs text-gray-500 hover:text-white font-bold py-2 px-4 rounded-full">
    {{ label }}
  </a>
</template>

<script>

export default {
  name: "Btn",
  props: {
    url: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
  },
}
</script>
