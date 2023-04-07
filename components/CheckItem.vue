<template>
  <div class="flex flex-row gap-2 w-full border border-gray-700 p-2">
    <div>
      <i :class="hasError ? 'icon-cancel text-red-400' : 'icon-check text-green-400'"></i>
    </div>
    <div>
      <div>
        <nuxt-link :to="localePath({ name: route.name, params: { [route.param]: item.slug } })"
          :class="item.offline ? 'text-gray-500' : 'text-gray-200'">
          {{ item.title }}
        </nuxt-link>
      </div>
      <ul v-if="hasError" class="text-red-400 text-sm list-disc	ml-4">
        <li v-for="(error, errorIndex) in errors" :key="errorIndex">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { validate } from '../validation';

export default {
  name: "CheckItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    schema: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default() {
        return {}
      }
    },
    route: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      validation: null
    };
  },
  computed: {
    hasError() {
      return this.validation && this.validation.$hasError;
    },
    errors() {
      return this.validation && this.validation.$errors;
    },
    countErrors() {
      return this.validation && this.validation.$errors.length;
    },
  },
  mounted: function () {
    this.validation = validate(this.item, this.schema, this.options);
  }
}
</script>
