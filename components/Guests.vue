<template>
  <div class="mb-20 text-center w-full">
    <Subtitle :title="$t('content.guests')"></Subtitle>
    <div class="flex flex-wrap justify-center">
      <Guest v-for="(guest, guestIndex) in guests" :key="guestIndex" :guest="guest"></Guest>
    </div>
  </div>
</template>

<script>

export default {
  name: "Guests",
  props: {
    guests: {
      type: Array,
      required: true
    }
  },
}
</script>
