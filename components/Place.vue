<template>
  <div>
    <figure>
      <img v-if="place.image" :src="place.image" :alt="place.title" style="width:100%">
    </figure>
    <div class="text-center">
      <div class="">{{  place.title  }}</div>
      <div v-if="place.address" class="text-xs">{{  place.address  }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Place",
  props: {
    place: {
      type: Object,
      required: true
    },
  },
}
</script>
