<template>

  <div class="flex w-full flex-col md:flex-row items-center font-sans p-8 md:p-24 border-t border-gray-800 mt-10">
    <img class="w-10 h-10 rounded-full mr-4" :src="$t('author.avatar')" alt="Avatar of Author">
    <div class="flex-1 mb-5">
      <p class="text-base font-bold text-base md:text-xl leading-none">{{  $t('author.title')  }}</p>
      <p class="text-gray-600 text-xs md:text-base">{{  $t('author.content')  }}</p>
    </div>
    <div class="justify-end">
      <nuxt-link as="button" :to="localePath('bio')"
        class="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">
        {{
         $t('author.more') 
        }}</nuxt-link>
    </div>
  </div>

</template>

<script>

export default {
  name: "Author",
}
</script>
