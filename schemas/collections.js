import {
  isBoolean,
  isUrl,
  isImage,
  isString,
  required,
} from '../validation'

export default {
  title: {
    required: required(),
    isString: isString(),
  },
  offline: {
    isBoolean: isBoolean(),
  },
  collection: {
    isString: isString(),
  },
  address: {
    isString: isString(),
  },
  url: {
    isUrl: isUrl(),
  },
  urlLabel: {
    isString: isString(),
  },
  image: {
    isUrl: isUrl(),
    isImage: isImage(),
  },
}