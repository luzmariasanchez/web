import { isUndefined, isFinite } from 'lodash';
import { formatMessage } from '..';
export function isNumber(errorMessage = '%field% is not a number') {
  return (value, item, field) => {
    if (isUndefined(value)) return true;
    return isFinite(value) || formatMessage(errorMessage, field);
  }
}
