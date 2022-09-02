<template>
  <div>
    <div v-if="items.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Bloc v-for="(item, itemIndex) in items" :key="itemIndex" :item="item" :class="getClassByIndex(itemIndex)"></Bloc>
    </div>
    <template v-else>
      <Message text="Empty"></Message>
    </template>
  </div>
</template>

<script>

export default {
  name: "GridHome",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    function getClassByIndex(index) {
      switch (index) {
        case 0:
          return 'col-span-full';
        case 1:
        case 2:
        case 3:
        case 4:
          return 'col-span-2';
        default:
          return '';
      }
    }
    return {
      getClassByIndex
    }
  }
}
</script>
