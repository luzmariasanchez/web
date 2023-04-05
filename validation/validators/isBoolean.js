import { isUndefined, isBoolean as _isBoolean } from 'lodash';
import { formatMessage } from '..';
export function isBoolean(errorMessage = '%field% is not a boolean') {
  return (value, item, field) => {
    if (isUndefined(value)) return true;
    return _isBoolean(value) || formatMessage(errorMessage, field);
  }
}
