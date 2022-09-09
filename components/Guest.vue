<template>
  <Link :url="guest.url" hasClass="block flex flex-wrap items-center mx-4 mb-4">
  <div v-if="guest.image" class="mr-3 w-20">
    <figure>
      <img class="w-full rounded-full" :src="$imager(guest.image, 'square')" :alt="guest.title" />
    </figure>
  </div>
  <div class="text-left">
    <div class="text-sm text-gray-200">{{ guest.title }}</div>
    <div class="text-xs text-gray-400 italic">{{ guest.from }}</div>
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
