import { isUndefined } from 'lodash';
import { formatMessage } from '..';
export function required(errorMessage = '%field% is required') {
  return (value, item, field) => {
    const isValid = !isUndefined(value);
    return isValid || formatMessage(errorMessage, field);
  }
}