<template>
  <div>
    <template v-if="url">
      <a :href="url" :target="target">
        <slot></slot>
      </a>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>

export default {
  name: "Link",
  props: {
    url: {
      type: String,
      required: false
    },
    target: {
      type: String,
      required: false,
      default() {
        return '_blank';
      }
    },
  },
}
</script>
