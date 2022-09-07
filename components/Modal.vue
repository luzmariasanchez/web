<template>
  <div>
    <template v-if="value">
      <button @click="closeModal" class="fixed top-5 right-5 text-3xl text-white z-[52] cursor-pointer"><i
          class="icon-cancel"></i></button>
      <div
        class="overflow-x-hidden overflow-y-auto fixed inset-0 z-[51] outline-none focus:outline-none justify-center items-center flex">
        <slot></slot>
      </div>
      <div class="opacity-50 fixed inset-0 z-[50] bg-black"></div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['value'],
  methods: {
    closeModal() {
      this.$emit('input', false)
    }
  }
}
</script>
