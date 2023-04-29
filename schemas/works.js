import {
  hasRelation,
  hasRelations,
  isArray,
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
    required: required(),
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
    isString: isString(),
    hasRelation: hasRelation('places'),
  },
  categorys: {
    isArray: isArray(),
    hasRelations: hasRelations('categorys'),
  },
  tags: {
    isArray: isArray(),
    hasRelations: hasRelations('tags'),
  },
  collections: {
    isArray: isArray(),
    hasRelations: hasRelations('collections'),
  },
  commissions: {
    isArray: isArray(),
    hasRelations: hasRelations('commissions'),
  },
  grants: {
    isArray: isArray(),
    hasRelations: hasRelations('grants'),
  },
  prizes: {
    isArray: isArray(),
    hasRelations: hasRelations('prizes'),
  },
  residencys: {
    isArray: isArray(),
    hasRelations: hasRelations('residencys'),
  },
  sponsors: {
    isArray: isArray(),
    hasRelations: hasRelations('sponsors'),
  },
  sponsorsLabel: {
    isString: isString(),
  },
  guests: {
    isArray: isArray(),
    hasRelations: hasRelations('guests'),
  },
  guestsLabel: {
    isString: isString(),
  },
  works: {
    isArray: isArray(),
    hasRelations: hasRelations('works'),
  },
  pictures: {
    isArray: isArray(),
  },
}