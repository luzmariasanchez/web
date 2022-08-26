<template>
  <div class="mb-3">
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

