import dateFormat from 'dateformat';

const formatDate = (date, format = 'd-mmm-yyyy') => (isNaN(new Date(date).getTime()) ? 'N/A' : dateFormat(date, format));

export const yearsDiff = (date) => {
    const diffMs = Date.now() - new Date(date);
    const dateFromEpoch = new Date(diffMs);
    const dateDiff = Math.abs(dateFromEpoch.getUTCFullYear() - 1970)
    return dateDiff 
}

export const monthDiff = (date) => {
    let past_date = new Date(date);
    let current_date = new Date();
    var diff =(current_date.getTime() - past_date.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7 * 4);
   return Math.abs(Math.round(diff));
}

export default formatDate;
