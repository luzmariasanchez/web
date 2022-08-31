<template>
  <div class="mb-20 text-center">
    <Subtitle :title="'Sponsors'"></Subtitle>
    <div class="grid grid-flow-col auto-cols-max gap-7">
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
