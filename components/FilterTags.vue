<template>
  <div class="relative inline-block">
    <button @click.stop="open" class="text-white">{{ $t('common.tags') }}</button>
    <template v-if="opened">
      <Dropdown @close="close">
        <ul>
          <li v-for="(tag, tagIndex) in tags" :key="tagIndex">
            <nuxt-link :to="localePath({ name: pathName, params: { tag: tag.slug } })"
              :class="['block hover:bg-gray-200 p-1', isActive(tag) && 'bg-gray-300']">{{
                  tag.title
              }}
            </nuxt-link>
          </li>
        </ul>
      </Dropdown>
    </template>
  </div>
</template>

<script>

export default {
  name: "FilterTags",
  props: {
    tags: {
      type: Array,
      required: true
    },
    pathName: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    open() {
      this.opened = true;
    },
    close() {
      this.opened = false;
    },
    isActive(tag) {
      return tag.slug === this.$route.params.tag;
    }
  }
}
</script>
