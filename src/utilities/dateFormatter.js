import dateFormat from 'dateformat';

const formatDate = (date, format = 'd-mmm-yyyy') => (isNaN(new Date(date).getTime()) ? 'N/A' : dateFormat(date, format));

export default formatDate;
