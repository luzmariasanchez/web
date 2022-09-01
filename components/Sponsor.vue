<template>
  <Link :url="sponsor.url" class="mx-4 mb-4">
  <figure v-if="sponsor.image" class="mb-2">
    <img :src="sponsor.image" :alt="sponsor.title" style="width:140px">
  </figure>
  <div class="text-center text-sm text-gray-200">
    {{  sponsor.title  }}
  </div>
  </Link>
</template>

<script>

export default {
  name: "Sponsor",
  props: {
    sponsor: {
      type: Object,
      required: true
    },
  },
}
</script>
