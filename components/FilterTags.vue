<template>
  <div class="relative inline-block">
    <button @click.stop="toggle" class="text-white">TAGS</button>
    <template v-if="opened">
      <Dropdown @close="close">
        <ul>
          <li v-for="(tag, tagIndex) in tags" :key="tagIndex">
            <nuxt-link :to="localePath({ name: pathName, params: { tag: tag.slug } })"
              class="block hover:bg-gray-200 p-1">{{
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
import { ref, useRoute } from 'vue';

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
  setup() {
    const route = useRoute();
    const opened = ref(false);
    function toggle() {
      opened.value = !opened.value;
    }
    function close() {
      opened.value = false;
    }
    console.log(route);
    return {
      opened,
      toggle,
      close
    }
  },
}
</script>
