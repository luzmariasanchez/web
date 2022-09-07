<template>
  <div class="mb-20 text-center">
    <Subtitle :title="$t('content.sponsors')"></Subtitle>
    <div class="flex flex-wrap justify-center">
      <Sponsor v-for="(sponsor, sponsorIndex) in sponsors" :key="sponsorIndex" :sponsor="sponsor"></Sponsor>
    </div>
  </div>
</template>

<script>

export default {
  name: "Sponsors",
  props: {
    sponsors: {
      type: Array,
      required: true
    }
  },
}
</script>
