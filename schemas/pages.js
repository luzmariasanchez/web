import {
  isEmail,
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
  description: {
    isString: isString(),
  },
  image: {
    isUrl: isUrl(),
    isImage: isImage(),
  },
  address: {
    isString: isString(),
  },
  email: {
    isString: isString(),
    isEmail: isEmail(),
  },
  phone: {
    isString: isString(),
  },
}