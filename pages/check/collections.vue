<template>
  <div class="w-full container mx-auto">
    <Title :title="page.title" :description="page.description"></Title>
    <div class="grid md:grid-cols-12 gap-5">
      <div class="md:col-span-9">
        <CheckAsync :items="items" :schema="schema" :options="{ relations }" :route="route"></CheckAsync>
        <Pagination :pathName="'check-collections'" :currentPage="+currentPagination" :totalPage="+totalPagination">
        </Pagination>
      </div>
      <div class="md:col-span-3 md:pt-0 p-2">
        <CheckMenu current="collections"></CheckMenu>
      </div>
    </div>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadItems from "@/api/loadItems";
import schema from "@/schemas/collections";

export default {
  name: "check-collections",
  nuxtI18n: {
    paths: {
      en: "/check/collections",
      es: "/check/collections",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead(this.page, i18nHead, {}, true);
  },
  data() {
    return {
      schema,
      route: {
        name: 'index',
        param: 'none'
      }
    }
  },
  watchQuery: ['p'],
  async asyncData(context) {
    const page = {
      title: 'Check collections'
    }
    const { items, page: currentPagination, totalPage: totalPagination } = await loadItems(context, 'collections', {
      page: context.query.p ? parseInt(context.query.p, 10) : 1,
      limit: 1000,
      condition: {},
      fields: [
        'slug',
        'title',
        'offline',
        'address',
        'collection',
        'url',
        'image',
      ],
    });

    // relations
    const relations = {}
    return {
      page,
      items,
      relations,
      currentPagination,
      totalPagination,
    };
  },
}
</script>
