<template>

  <header class="w-full bg-black">
    <nav class="p-4 mt-0 w-full">
      <div class="container mx-auto flex justify-between">

        <div class="flex items-center">

          <div class="flex text-white font-extrabold">
            <ul class="list-reset flex flex-1 items-center">
              <li>
                <button
                  class="lg:hidden inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2 text-xl"
                  @click.stop="toggleMenu"><i :class="showMenu ? 'icon-cancel' : 'icon-menu'"></i></button>
              </li>
              <li>
                <nuxt-link :to="localePath({ name: 'index' })"
                  class="flex text-white text-base no-underline hover:text-white hover:no-underline pr-5">
                  <span class="w-0 w-auto block pl-1">Luz María Sánchez</span>
                </nuxt-link>
              </li>
            </ul>


          </div>

          <div :class="['lg:flex text-sm', showMenu ? 'opened' : 'hidden']" v-click-outside="closeMenu">
            <ul class="list-reset flex flex-col lg:flex-row lg:flex-1 lg:items-center" @click="closeMenu">
              <li class="mr-2" v-for="(category, categoryIndex) in categorys" :key="categoryIndex">
                <nuxt-link :to="localePath({ name: 'works-category', params: {category:category.slug}})"
                  class="cursor-pointer inline-block text-gray-600 no-underline lg:hover:text-gray-200 hover:text-black hover:text-underline py-2 px-2">
                  {{ category.title }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>

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
              <nuxt-link :to="switchLocalePath(nextLocale.code)"
                class="cursor-pointer inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-2">
                {{
                ('' + nextLocale.code).toUpperCase() }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </header>

</template>

<script>
import loadItems from "@/api/loadItems";

export default {
  name: "Head",
  data() {
    return {
      showMenu: false,
      categorys: []
    }
  },
  computed: {
    nextLocale() {
      return this.$i18n.locales.find(locale => locale.code !== this.$i18n.locale);
    },
  },
  methods: {
    toggleMenu: function () {
      this.showMenu = !this.showMenu;
    },
    closeMenu: function () {
      this.showMenu = false;
    },
  },
  async fetch() {
    this.categorys = await this.$content(this.$i18n.locale, 'categorys')
      .where({ offline: { $ne: true }, })
      .sortBy('order', 'asc')
      .sortBy('title', 'asc')
      .only(['title', 'slug'])
      .fetch();
  }
}
</script>

<style lang="less">
.opened {
  position: fixed;
  top: 70px;
  left: 0px;
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 1.2em;
  background-color: white;
  z-index: 100;
}

.nuxt-link-active {
  color: white;
}
</style>
  