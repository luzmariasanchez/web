import { isUndefined } from 'lodash';
import dayjs from 'dayjs';
import { formatMessage } from '..';
export function isDate(format, errorMessage = '%field% is not a valid date (format: %format%)') {
  return (value, item, field) => {
    if (isUndefined(value)) return true;
    const isValid = dayjs(value.toString(), format, true).isValid();
    return isValid || formatMessage(errorMessage, field, {
      '%format%': format
    });
  }
}
