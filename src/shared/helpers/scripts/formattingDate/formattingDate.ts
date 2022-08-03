import moment from 'moment';

const setDateFormat = (date: string) => {
  return moment.utc(date).format('DD.MM.YYYY, hh:mm');
};

export { setDateFormat };
