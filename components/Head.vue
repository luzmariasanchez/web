<template>

  <header>
    <!--Nav-->
    <nav class="bg-gray-900 p-4 mt-0 w-full">
      <div class="container mx-auto flex space-between">

        <div class="flex items-center">

          <div class="flex text-white font-extrabold">
            <a class="flex text-white text-base no-underline hover:text-white hover:no-underline" href="#">
              <span class="hidden w-0 md:w-auto md:block pl-1">Luz María Sánchez</span>
            </a>
          </div>

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
        </div>

        <div class="flex flex-1 flex-row-reverse text-sm">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li class="mr-2">
              <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                href="#"><i class="icon-search"></i></a>
            </li>
            <li class="mr-2">
              <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                href="#"><i class="icon-info"></i></a>
            </li>
            <li class="mr-2">
              <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                href="#"><i class="icon-mail"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>

</template>

<script>

export default {
  name: 'Header'
}
</script>
