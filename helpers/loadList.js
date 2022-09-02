
import { computed } from "vue";
export default async ({ $content, i18n }, categoryKey) => {

  const categorys = await $content(i18n.locale, 'categorys')
    .where({ slug: categoryKey })
    .fetch();

  const category = categorys[0];
  const items = await $content(i18n.locale, categoryKey)
    .sortBy('start', 'desc')
    .limit(4)
    .fetch();

  const itemsWithCategory = computed(() => {
    return items.map(item => ({
      ...item,
      category,
    }))
  })

  return {
    items: itemsWithCategory
  }
}