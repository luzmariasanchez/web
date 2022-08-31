<template>
  <figure class="inline-block">
    <img :src="url" :alt="alt" style="width:100px">
  </figure>
</template>

<script>

export default {
  name: "Picture",
  props: {
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    },
  },
}
</script>
