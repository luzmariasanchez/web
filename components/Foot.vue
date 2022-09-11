<template>

  <footer class="border-t border-gray-800">
    <div class="container max-w-6xl mx-auto flex items-center px-2 py-8">

      <div class="w-full mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <nuxt-link :to="localePath({ name: 'index' })"
            class="text-gray-200 no-underline hover:text-gray-400 hover:no-underline">
            {{ $t('foot.title') }}
          </nuxt-link>
        </div>
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul class="list-reset flex justify-center flex-1 md:flex-none items-center">
            <li>
              <nuxt-link :to="localePath('contact')"
                class="inline-block text-gray-200 no-underline hover:text-gray-400 hover:underline py-2 px-3">
                <i class="icon-mail"></i>
              </nuxt-link>
            </li>
            <li>
              <a :href="$t('foot.social.linkedin')" target="_blank"
                class="inline-block text-gray-200 no-underline hover:text-gray-400 hover:underline py-2 px-3">
                <i class="icon-linkedin"></i>
              </a>
            </li>
            <li>
              <a :href="$t('foot.social.twitter')" target="_blank"
                class="inline-block text-gray-200 no-underline hover:text-gray-400 hover:underline py-2 px-3">
                <i class="icon-twitter"></i>
              </a>
            </li>
            <li>
              <a :href="$t('foot.social.instagram')" target="_blank"
                class="inline-block text-gray-200 no-underline hover:text-gray-400 hover:underline py-2 px-3"><i
                  class="icon-instagram"></i></a>
            </li>
            <li>
              <a :href="$t('foot.social.youtube')" target="_blank"
                class="inline-block text-gray-200 no-underline hover:text-gray-400 hover:underline py-2 px-3"><i
                  class="icon-youtube"></i></a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </footer>

</template>

<script>

export default {
  name: "Foot",
  props: {
  },
}
</script>
  