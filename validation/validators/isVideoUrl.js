import { isUndefined } from 'lodash';
import { isYoutubeUrl, isVimeoUrl } from '~/helpers/utils/url';
import { formatMessage } from '..';
export function isVideoUrl(errorMessage = '%field% is not a valid Youtube or Vimeo URL') {
  return (value, item, field) => {
    if (isUndefined(value)) return true;
    const isValid = value && (isYoutubeUrl(value) || isVimeoUrl(value));
    return isValid || formatMessage(errorMessage, field);
  }
}
