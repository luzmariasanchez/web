import { isNil } from 'lodash';
import { formatMessage } from '..';
export function hasRelation(relation, errorMessage = '%field% is not a valid relation (%value% not found in %relation%)') {
  return (value, item, field, options) => {
    if (isNil(value)) return true;
    const isValid = options?.relations?.[relation].includes(value);
    return isValid || formatMessage(errorMessage, field, {
      '%relation%': relation,
      '%value%': value,
    });
  }
}