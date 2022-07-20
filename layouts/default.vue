<template>
  <div>

    <Head />
    <Nuxt />
    <Foot />
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
