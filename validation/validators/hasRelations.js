import { isNil } from 'lodash';
import { formatMessage } from '..';
export function hasRelations(relation, errorMessage = '%field% has not a valid relations (%value% not found in %relation%)') {
  return (value, item, field, options) => {
    if (isNil(value)) return true;
    let isValid = true;
    const notIncludeds = [];
    if (value) {
      value.forEach(val => {
        if (!options?.relations?.[relation].includes(val)) {
          notIncludeds.push(val);
          isValid = false;
        }
      })
    }
    return isValid || formatMessage(errorMessage, field, {
      '%relation%': relation,
      '%value%': notIncludeds.join(', '),
    });
  }
}