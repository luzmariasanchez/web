<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <div class="text-center">
      <ul>
        <li v-for="(item, itemIndex) in items" :key="itemIndex">
          <NuxtLink :to="localePath({ name: item.route })" class="text-gray-200 hover:text-white">{{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";

export default {
  name: "check",
  nuxtI18n: {
    paths: {
      en: "/check",
      es: "/check",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead);
  },
  data() {
    return {
      page: {
        title: 'Check'
      },
      items: [
        { name: 'Categories', route: 'check-categorys' },
        { name: 'Collections', route: 'check-collections' },
        { name: 'Commissions', route: 'check-commissions' },
        { name: 'Grants', route: 'check-grants' },
        { name: 'Guests', route: 'check-guests' },
        { name: 'Places', route: 'check-places' },
        { name: 'Prizes', route: 'check-prizes' },
        { name: 'Residences', route: 'check-residencys' },
        { name: 'Sponsors', route: 'check-sponsors' },
        { name: 'Tags', route: 'check-tags' },
        { name: 'Works', route: 'check-works' },
      ]
    }
  },
}
</script>
