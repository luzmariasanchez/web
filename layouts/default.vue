<template>
  <div>

    <Head />
    <div class="pt-[68px]">
      <Nuxt />
      <Foot />
    </div>
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
import Foot from '@/components/Foot.vue'

export default {
  name: 'Header',
  components: {
    Head, Foot
  }
}
</script>
