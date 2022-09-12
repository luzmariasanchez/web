<template>
  <div>
    <template v-if="error">
      <Error :error="error"></Error>
    </template>
    <template v-else>
      <div class="w-full container mx-auto">
        <Title :title="category.title" :description="tag.title"></Title>
        <Nav>
          <template #left>
            <i class="icon-filter text-gray-300 mr-2"></i>
            <FilterTags :tags="tags" :pathName="`${category.slug}-tag-tag`"></FilterTags>
          </template>
        </Nav>
        <Grid :items="items"></Grid>
        <Pagination :pathName="`${category.slug}-tag-tag`" :params="{tag:tag.slug}" :currentPage="+page"
          :totalPage="+totalPage"></Pagination>
        <Author></Author>
      </div>
    </template>
  </div>
</template>

<script>
import getHead from "@/helpers/head";
import loadList from "@/api/loadList";

export default {
  name: "academias-tag-tag",
  nuxtI18n: {
    paths: {
      en: "/academia/tag/:tag",
      es: "/academico/tag/:tag",
    },
  },
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return getHead({
      ...this.page,
      title: `${this.tag.title} - ${this.category.title}`
    }, i18nHead);
  },
  watchQuery: ['p'],
  async asyncData(context) {
    const categoryKey = 'academias';
    return await loadList(context, categoryKey);
  },
}
</script>
