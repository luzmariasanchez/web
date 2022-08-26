
export default async ({ $content, i18n }, category, slug) => {

  const pages = await $content(i18n.locale, category)
    .where({ slug })
    .fetch();

  if (pages && pages.length) {

    const page = pages[0];

    async function loadRelation(key, { service, only } = {}) {
      if (page[key]) {
        const res = await $content(i18n.locale, service || key)
          .where({ slug: page[key] })
          .only(only || ["title", "description", "image", "slug"])
          .fetch();
        if (res && res.length) return res[0];
      }
    }
    async function loadRelations(key, service) {
      return page[key] && await $content(i18n.locale, service || key)
        .where({ slug: { $in: page[key] } })
        .only(["title", "description", "image", "slug"])
        .fetch();
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
        sponsors: await loadRelations('sponsors'),
        guests: await loadRelations('guests'),
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