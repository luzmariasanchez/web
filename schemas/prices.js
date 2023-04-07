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
  start: {
    isDate: isDate('YYYY'),
  },
  end: {
    isDate: isDate('YYYY'),
  },
  address: {
    isString: isString(),
  },
  type: {
    isString: isString(),
  },
  institution: {
    isString: isString(),
  },
  category: {
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