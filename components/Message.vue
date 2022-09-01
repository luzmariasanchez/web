<template>
  <div class="border border-gray-600 rounded text-center text-gray-300 p-3">
    {{  text  }}
  </div>
</template>

<script>

export default {
  name: "Message",
  props: {
    text: {
      type: String,
      required: true
    },
  },
}
</script>
