<template>
  <div>
    <div class="container px-4 md:px-0 max-w-6xl mx-auto">
      <div class="mx-0 sm:mx-6 py-5">
        <div class="bg-gray-200 w-full leading-normal rounded-t">
          <div class="p-10 text-gray-600 text-center">
            {{ error.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>