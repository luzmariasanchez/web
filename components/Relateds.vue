<template>
  <div>
    <template v-if="items && items.length">
      <Subtitle :title="$t('content.relateds')"></Subtitle>
      <Grid :items="items" size="small"></Grid>
    </template>
  </div>
</template>

<script>
import { sortBy } from 'lodash';

export default {
  name: "Relateds",
  props: {
    page: {
      type: Object,
      required: true
    },
  },
  computed: {
    items() {
      return sortBy([
        ...(this.page.academias ? this.page.academias : []),
        ...(this.page.artworks ? this.page.artworks : []),
        ...(this.page.exhibitions ? this.page.exhibitions : []),
        ...(this.page.publications ? this.page.publications : []),
        ...(this.page.researchs ? this.page.researchs : []),
      ], 'start').reverse()
    }
  }
}
</script>
