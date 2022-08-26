<template>
  <div class="mb-3 text-center">
    <Sponsor v-for="(sponsor, sponsorIndex) in sponsors" :key="sponsorIndex" :sponsor="sponsor"></Sponsor>
  </div>
</template>

<script>

export default {
  name: "PageSponsors",
  props: {
    sponsors: {
      type: Array,
      required: true
    }
  },
}
</script>
