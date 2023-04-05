import {
  hasRelation,
  // hasRelations,
  isBoolean,
  isDate,
  isImage,
  isNumber,
  isString,
  isUrl,
  isVideoUrl,
  maxLength,
  minLength,
  required,
} from '../validation'

export default {
  title: {
    required: required(),
    isString: isString(),
  },
  offline: {
    isBoolean: isBoolean()
  },
  private: {
    isBoolean: isBoolean()
  },
  description: {
    isString: isString(),
    maxLength: maxLength(100),
  },
  image: {
    isUrl: isUrl(),
    isImage: isImage(),
  },
  imageLegend: {
    isUrl: isString(),
  },
  video: {
    isUrl: isUrl(),
    isVideoUrl: isVideoUrl(),
  },
  start: {
    required: required(),
    isDate: isDate('YYYY'),
  },
  end: {
    isDate: isDate('YYYY'),
  },
  info: {
    isString: isString(),
  },
  place: {
    hasRelation: hasRelation('places'),
  },
  // categorys: {
  //   hasRelations: hasRelations('categorys'),
  // },

  // TODO: add requiredIf validator

  // place: template
  // categorys:
  //  - academia
  //  - artworks
  //  - exhibitions
  //  - publications
  //  - research
  // tags:
  //  - template
  // collections:
  //  - template
  // commissions:
  //  - template
  // grants:
  //  - template
  // prices:
  //  - template
  // residencys:
  //  - template
  // sponsorsLabel: Collab
  // sponsors:
  //  - artpace
  // guestsLabel: Curador
  // guests:
  //  - amanda-de-la-garza
  // works:
  //  - template
  // pictures:
}