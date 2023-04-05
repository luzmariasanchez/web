import { isUndefined, isString as _isString } from 'lodash';
import { formatMessage } from '..';
export function isString(errorMessage = '%field% is not a string') {
  return (value, item, field) => {
    if (isUndefined(value)) return true;
    return _isString(value) || formatMessage(errorMessage, field);
  }
}
