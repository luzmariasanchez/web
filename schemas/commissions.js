import {
  isBoolean,
  isDate,
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
  year: {
    isDate: isDate('YYYY'),
  },
  address: {
    isString: isString(),
  },
  jury: {
    isString: isString(),
  },
  url: {
    isUrl: isUrl(),
  },
  image: {
    isUrl: isUrl(),
    isImage: isImage(),
  },
}