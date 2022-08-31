<template>
  <Link :url="guest.url" hasClass="block flex flex-wrap items-center mb-1">
  <div v-if="guest.image" class="mr-3">
    <figure>
      <img class="rounded-full" :src="guest.image" :alt="guest.title" style="width:50px">
    </figure>
  </div>
  <div class="text-left">
    <div class="text-sm text-gray-200">{{  guest.title  }}</div>
    <div class="text-xs text-gray-400 italic">{{  guest.from  }}</div>
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
