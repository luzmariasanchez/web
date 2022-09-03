<template>
  <div class="text-center text-gray-300 py-20">
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
