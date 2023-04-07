import { isNil } from 'lodash';
import { formatMessage } from '..';
export function isImage(errorMessage = '%field% is not a valid image') {
  return (value, item, field) => {
    if (isNil(value)) return true;
    const isValid = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(value.toLowerCase());
    return isValid || formatMessage(errorMessage, field);
  }
}
