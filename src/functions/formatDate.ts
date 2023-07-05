import moment from 'moment';

export function formatDate(day?: Date | string): string {
  return !day ? '/latest' : moment(day).format('YYYY-MM-DD');
}
