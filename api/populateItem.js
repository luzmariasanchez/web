
const defaultOptions = {
  service: '',
  fields: ['title', 'slug'],
  parentField: null,
  childField: 'slug',
  keyField: null,
  many: false,
}

async function assignRelations(context, item, options = {}) {

  const { service, fields, parentField, childField, keyField } = {
    ...defaultOptions,
    ...options
  }

  const parentKey = parentField || service;

  const relatedIds = item[parentKey];
  if (!relatedIds || !relatedIds.length) return item;

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

  const relations = (item[parentKey] || [])
    .map(parentValue => relatedsById[parentValue])
    .filter(relation => relation)

  return {
    ...item,
    [fieldKey]: relations
  };

}

async function assignRelation(context, item, options = {}) {

  const { service, fields, parentField, childField, keyField } = {
    ...defaultOptions,
    ...options
  }

  const parentKey = parentField || service;

  const relatedId = item[parentKey];
  if (!relatedId) return item;

  const relateds = await context.$content(context.i18n.locale, service)
    .where({ [childField]: relatedId })
    .only(fields)
    .fetch();

  const fieldKey = keyField || parentKey;

  return {
    ...item,
    [fieldKey]: relateds[0]
  };

}


export default async function populateItem(context, item, options = {}) {

  if (options.many) {
    return assignRelations(context, item, options);
  } else {
    return assignRelation(context, item, options);
  }

}

