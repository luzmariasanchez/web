<template>
  <NuxtLink :to="localePath({ name: route })"
    class="border border-gray-400 hover:border-gray-200 text-gray-200 hover:text-white px-2 py-6 flex flex-col items-center">
    <div class="text-2xl">
      {{ collection.total }} {{ name }}
    </div>
    <div class="sm">
      <div v-if="collection.private" class="text-gray-500">{{ collection.private }} privates</div>
      <div v-if="collection.offline" class="text-gray-500">{{ collection.offline }} offline</div>
    </div>
  </NuxtLink>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    service: {
      type: String,
      required: true,
    },
    collection: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {

    };
  },
  computed: {
    route() {
      return "check-" + this.service;
    },
  },
  mounted: async function () {

  }
}
</script>
