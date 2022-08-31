<template>
  <div class="bg-black">

    <Head />
    <div class="min-h-screen">
      <Nuxt />
    </div>
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
