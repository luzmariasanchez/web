<template>
  <div>
    <client-only>
      <div v-if="items.length" class="flex flex-col gap-2">
        <CheckItem v-for="(item, itemIndex) in items" :key="itemIndex" :item="item" :schema="schema" :options="options"
          :route="route">
        </CheckItem>
      </div>
      <template v-else>
        <Message :text="$t('message.empty')"></Message>
      </template>
    </client-only>
  </div>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    schema: {
      type: Object,
      required: true,
      default() {
        return {}
      }
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
}
</script>
