<template>
  <!--Nav-->
  <nav class="mt-0 w-full">
    <div class="container mx-auto flex items-center">

      <div class="flex w-1/2 pl-4 text-sm">
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
