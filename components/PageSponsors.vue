<template>
  <div class="mb-6 text-center">
    <h4 class="text-xs font-semibold uppercase mb-2">
      Sponsors
    </h4>
    <div>
      <Sponsor v-for="(sponsor, sponsorIndex) in sponsors" :key="sponsorIndex" :sponsor="sponsor"></Sponsor>
    </div>
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
