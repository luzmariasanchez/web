<template>
  <div class="mb-6">
    <h4 class="mb-2 text-center text-xs font-semibold uppercase">
      Place
    </h4>
    <Link :url="place.url">
    <Place :place="place"></Place>
    </Link>
  </div>
</template>

<script>

export default {
  name: "PagePlace",
  props: {
    place: {
      type: Object,
      required: true
    }
  },
}
</script>

