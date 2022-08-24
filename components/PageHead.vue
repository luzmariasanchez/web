<template>

  <div class="w-full h-screen max-h-96 m-0 p-0 bg-cover bg-bottom" :style="{
    background: `url('${page.image || '/images/default.jpg'}') no-repeat center center`,
  }">
    <div class="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
      <p class="text-white font-extrabold text-3xl md:text-5xl">
        {{ page.title }}
      </p>
      <p class="text-xl md:text-2xl text-gray-500" v-if="page.description">{{ page.description }}</p>
    </div>
  </div>

</template>

<script>

export default {
  name: "PageHead",
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
}
</script>
