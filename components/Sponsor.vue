<template>
  <Link :url="sponsor.url" class="inline-block">
  <figure>
    <img v-if="sponsor.image" :src="sponsor.image" :alt="sponsor.title" style="width:140px">
  </figure>
  <div class="text-center">
    <div class="text-sm">{{  sponsor.title  }}</div>
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
