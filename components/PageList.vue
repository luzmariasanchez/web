<template>

  <div class="mb-20">
    <Subtitle :title="title"></Subtitle>
    <ul>
      <li v-for="(item, itemIndex) in items" :key="itemIndex">
        <nuxt-link :to="localePath({ name: pathName, params: { slug: item.slug } })" class="text-gray-200">{{  item.title 
          }}
        </nuxt-link>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: "PageList",
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
