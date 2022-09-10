
export default async ({ $content, i18n }, category, slug) => {

  const pages = await $content(i18n.locale, category)
    .where({ slug, offline: { $ne: true } })
    .fetch();

  if (pages && pages.length) {

    const page = pages[0];

    const categorys = await $content(i18n.locale, 'categorys').fetch();
    const categorysByKey = {}
    categorys.forEach(category => {
      categorysByKey[category.slug] = category;
    })

    async function loadRelation(key, { service, only } = {}) {
      if (page[key]) {
        const res = await $content(i18n.locale, service || key)
          .where({ slug: page[key], offline: { $ne: true } })
          .only(only || ["title", "description", "image", "slug"])
          .fetch();
        if (res && res.length) return res[0];
      }
    }
    async function loadRelations(key, { service, only } = {}) {
      const list = page[key] && await $content(i18n.locale, service || key)
        .where({ slug: { $in: page[key] }, offline: { $ne: true }, })
        .only(only || ["title", "description", "image", "slug"])
        .fetch()

      return list && list.map(item => ({
        ...item,
        category: categorysByKey[key]
      }));
    }

    return {
      page: {
        ...page,
        place: await loadRelation('place', { service: 'places', only: ["title", "description", "image", "slug", "address", "url"] }),
        tags: await loadRelations('tags'),
        artworks: await loadRelations('artworks'),
        exhibitions: await loadRelations('exhibitions'),
        academias: await loadRelations('academias'),
        researchs: await loadRelations('researchs'),
        publications: await loadRelations('publications'),
        sponsors: await loadRelations('sponsors', { only: ["title", "description", "image", "slug", "url"] }),
        guests: await loadRelations('guests', { only: ["title", "description", "image", "slug", "from", "job", "url", "body"] }),
      },
      error: null
    }

  } else {

    return {
      page: null,
      error: {
        code: 404,
        message: 'NOT_FOUND'
      },
    }
  }
}