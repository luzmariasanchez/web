<template>
  <div class="mb-3 text-left">
    <Tag v-for="(tag, tagIndex) in tags" :key="tagIndex" :tag="tag" :pathName="`${category}-tag-tag`"></Tag>
  </div>
</template>

<script>

export default {
  name: "PageTags",
  props: {
    tags: {
      type: Array,
      required: true
    },
    category: {
      type: String,
      required: true
    },
  },
}
</script>
