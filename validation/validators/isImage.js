import { isUndefined } from 'lodash';
import { formatMessage } from '..';
export function isImage(errorMessage = '%field% is not a valid image') {
  return (value, item, field) => {
    if (isUndefined(value)) return true;
    const isValid = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(value);
    return isValid || formatMessage(errorMessage, field);
  }
}
