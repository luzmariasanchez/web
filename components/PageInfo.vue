<template>
  <div class="block mb-3 text-white text-2xl text-left italic">
    {{  info  }}
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
