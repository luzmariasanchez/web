<template>
  <nav class="w-full mb-3">
    <div class="flex items-center">

      <div class="flex w-1/2 text-sm">
        <slot name="left"></slot>
      </div>

      <div class="flex w-1/2 justify-end content-center">
        <slot name="right"></slot>
      </div>

    </div>
  </nav>
</template>

<script>

export default {
  name: "PageNav",
}
</script>
