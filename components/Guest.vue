<template>
  <Link :url="guest.url" class="inline-block">
  <figure>
    <img v-if="guest.image" :src="guest.image" :alt="guest.title" style="width:100%">
  </figure>
  <div class="text-center">
    <div class="text-sm">{{ guest.title }}</div>
  </div>
  </Link>
</template>

<script>

export default {
  name: "Guest",
  props: {
    guest: {
      type: Object,
      required: true
    },
  },
}
</script>
