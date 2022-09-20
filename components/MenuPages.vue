<template>
  <div class="flex items-center text-sm">
    <ul class="list-reset flex flex-1 items-center">
      <li class="ml-2">
        <nuxt-link :to="localePath('search')"
          class="cursor-pointer inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2">
          <i class="icon-search"></i>
        </nuxt-link>
      </li>
      <li class="ml-2">
        <nuxt-link :to="localePath('bio')"
          class="cursor-pointer inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2">
          <i class="icon-info"></i>
        </nuxt-link>
      </li>
      <li class="ml-2">
        <nuxt-link :to="localePath('contact')"
          class="cursor-pointer inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2">
          <i class="icon-mail"></i>
        </nuxt-link>
      </li>
      <li class="ml-2">
        <LocaleLink></LocaleLink>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "MenuPages",
}
</script>

<style lang="less" scoped>
.nuxt-link-active {
  color: white;
}
</style>
  