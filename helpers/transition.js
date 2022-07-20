import cleanRouteNameLocale from '@/helpers/cleanRouteNameLocale';

export default (to, from) => {
  if (from) {
    return `${cleanRouteNameLocale(from.name)}-to-${cleanRouteNameLocale(to.name)}`;
  } else {
    return '';
  }
}