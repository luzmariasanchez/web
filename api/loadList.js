
import loadContent from "~/api/loadContent";
export default async (context, categoryKey) => {
  const page = context.query.p || 1;
  const itemsByPage = 24;
  const { page: category, error } = await loadContent(context, 'categorys', categoryKey);

  const where = { offline: { $ne: true } };
  let tagRequest;
  if (context.params.tag) {
    tagRequest = context.params.tag && await loadContent(context, 'tags', context.params.tag);
    where.tags = { $contains: context.params.tag };
  }
  const totalItems = await context.$content(context.i18n.locale, categoryKey)
    .where(where)
    .only([])
    .fetch()
  const items = await context.$content(context.i18n.locale, categoryKey)
    .where(where)
    .sortBy(['start', 'desc'])
    .limit(itemsByPage)
    .skip((page - 1) * itemsByPage)
    .only(['slug', 'title', 'description', 'image', 'start'])
    .fetch();
  const tags = await context.$content(context.i18n.locale, 'tags')
    .where({ offline: { $ne: true } })
    .sortBy(['slug', 'asc'])
    .only(['slug', 'title'])
    .fetch();

  const totalPage = totalItems.length / itemsByPage;

  return {
    category,
    tag: tagRequest && tagRequest.page,
    items: items.map(item => ({
      ...item,
      category,
    })),
    tags,
    error: tagRequest ? tagRequest.error : error,
    page,
    totalPage,
  };
}