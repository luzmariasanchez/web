<template>
  <div class="mb-6 text-center">
    <h4 class="text-xs font-semibold uppercase mb-2">
      Guests
    </h4>
    <div>
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
