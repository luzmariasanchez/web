<template>
  <div class="markdown-content text-gray-300 mb-6">
    <nuxt-content :document="page" />
  </div>
</template>

<script>

export default {
  name: "PageContent",
  props: {
    page: {
      type: Object,
      required: true
    },
  },
}
</script>
