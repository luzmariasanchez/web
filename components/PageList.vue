<template>

  <div class="mb-10">
    <h4 v-if="title" class="text-xl font-semibold">{{ title }}</h4>
    <ul>
      <li v-for="(item, itemIndex) in items" :key="itemIndex">
        <nuxt-link :to="localePath({ name: pathName, params: { slug: item.slug } })" class="">{{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: "PageGrid",
  props: {
    items: {
      type: Array,
      required: true,
    },
    pathName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
}
</script>
