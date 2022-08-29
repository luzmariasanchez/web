<template>
  <Link :url="guest.url" hasClass="block w-full flex flex-wrap items-center mb-1">
  <div class="mr-3">
    <figure>
      <img class="rounded-full" v-if="guest.image" :src="guest.image" :alt="guest.title" style="width:50px">
    </figure>
  </div>
  <div class="text-left">
    <div class="text-sm">{{  guest.title  }}</div>
    <div class="text-xs italic">{{  guest.from  }}</div>
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
