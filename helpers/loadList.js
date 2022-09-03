
export default async ({ $content, i18n }, categoryKey, options = {}) => {

  const { limit, skip, query } = {
    limit: 12,
    skip: 0,
    query: '',
    ...options
  }
  const categorys = await $content(i18n.locale, 'categorys')
    .where({ slug: categoryKey })
    .fetch();
  const category = categorys[0];
  const items = await $content(i18n.locale, categoryKey)
    .search(query)
    .sortBy('start', 'desc')
    .skip(skip)
    .limit(limit)
    .fetch();

  return {
    items: items.map(item => ({
      ...item,
      category,
    }))
  }
}