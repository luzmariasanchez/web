<template>
  <div class="block mb-3 text-gray-700 text-xl text-center p-2 border-solid border border-gray-300">
    {{ info }}
  </div>
</template>

<script>

export default {
  name: "PageInfo",
  props: {
    info: {
      type: String,
      required: true
    }
  },
}
</script>
