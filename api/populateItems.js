
export default async function populateItems(context, items, options = {}) {

  const { service, fields, parentField, childField, keyField } = {
    service: '',
    fields: ['title', 'slug'],
    parentField: null,
    childField: 'slug',
    keyField: null,
    ...options
  }

  const parentKey = parentField || service;

  const relatedIds = [...new Set(items.map(item => item[parentKey]).flat())];
  if (!relatedIds.length) return items;

  const relateds = await context.$content(context.i18n.locale, service)
    .where({ [childField]: { $in: relatedIds } })
    .only(fields)
    .fetch();

  const relatedsById = relateds.reduce((previousValue, currentValue) => {
    return {
      ...previousValue,
      [currentValue[childField]]: currentValue
    };
  }, {})

  const fieldKey = keyField || parentKey;

  const relationedItems = items.map(item => {

    const relations = (item[parentKey] || [])
      .map(parentValue => relatedsById[parentValue])
      .filter(relation => relation)

    return {
      ...item,
      [fieldKey]: relations
    }
  })

  return relationedItems;
}

