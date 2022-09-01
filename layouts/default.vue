<template>
  <div class="bg-black">

    <Head />
    <div class="min-h-screen px-3">
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
