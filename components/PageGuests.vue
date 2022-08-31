<template>
  <div class="mb-20 text-center w-full">
    <Subtitle :title="'Guests'"></Subtitle>
    <div class="grid grid-flow-col auto-cols-max gap-7">
      <Guest v-for="(guest, guestIndex) in guests" :key="guestIndex" :guest="guest"></Guest>
    </div>
  </div>
</template>

<script>

export default {
  name: "PageGuests",
  props: {
    guests: {
      type: Array,
      required: true
    }
  },
}
</script>
