<template>

  <header>
    <!--Nav-->
    <nav class="bg-gray-900 p-4 mt-0 w-full">
      <div class="container mx-auto flex space-between">

        <div class="flex items-center">

          <div class="flex text-white font-extrabold">
            <nuxt-link to="/" class="flex text-white text-base no-underline hover:text-white hover:no-underline"
              href="#">
              <span class="hidden w-0 md:w-auto md:block pl-1">Luz María Sánchez</span>
            </nuxt-link>
          </div>

          <div class="flex pl-4 text-sm">
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li class="mr-2">
                <nuxt-link to="/"
                  class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                  href="#">{{ $t('page.artworks') }}</nuxt-link>
              </li>
              <li class="mr-2">
                <nuxt-link to="/"
                  class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                  href="#">{{ $t('page.exhibitions') }}</nuxt-link>
              </li>
              <li class="mr-2">
                <nuxt-link to="/"
                  class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                  href="#">{{ $t('page.research') }}</nuxt-link>
              </li>
              <li class="mr-2">
                <nuxt-link to="/"
                  class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                  href="#">{{ $t('page.academia') }}</nuxt-link>
              </li>
              <li class="mr-2">
                <nuxt-link to="/"
                  class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                  href="#">{{ $t('page.publications') }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-1 flex-row-reverse text-sm">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li class="ml-2">
              <nuxt-link to="/"
                class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                href="#"><i class="icon-search"></i></nuxt-link>
            </li>
            <li class="ml-2">
              <nuxt-link :to="localePath('info')"
                class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                href="#"><i class="icon-info"></i></nuxt-link>
            </li>
            <li class="ml-2">
              <nuxt-link :to="localePath('contact')"
                class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                href="#"><i class="icon-mail"></i></nuxt-link>
            </li>
            <li class="ml-2">
              <nuxt-link :to="switchLocalePath(nextLocale.code)"
                class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2"
                href="#">{{ ('' + nextLocale.code).toUpperCase() }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>

</template>

<script>

export default {
  name: "Head",
  computed: {
    nextLocale() {
      return this.$i18n.locales.find(locale => locale.code !== this.$i18n.locale);
    },
  },
}
</script>
