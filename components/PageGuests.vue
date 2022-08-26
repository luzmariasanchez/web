<template>
  <div class="mb-3 text-center">
    <Guest v-for="(guest, guestIndex) in guests" :key="guestIndex" :guest="guest"></Guest>
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
