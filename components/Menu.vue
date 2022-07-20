<template>

  <div class="flex pl-4 text-sm">
    <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
      <li class="mr-2">
        <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
          href="#">{{ $t('page.artworks') }}</a>
      </li>
      <li class="mr-2">
        <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
          href="#">{{ $t('page.exhibitions') }}</a>
      </li>
      <li class="mr-2">
        <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
          href="#">{{ $t('page.research') }}</a>
      </li>
      <li class="mr-2">
        <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
          href="#">{{ $t('page.academia') }}</a>
      </li>
      <li class="mr-2">
        <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
          href="#">{{ $t('page.publications') }}</a>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: 'Menu'
}
</script>
