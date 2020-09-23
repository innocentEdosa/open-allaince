import dateFormat from 'dateformat';

const formatDate = (date, format = 'd-mmm-yyyy') => (isNaN(new Date(date).getTime()) ? 'N/A' : dateFormat(date, format));

export const yearsDiff = (date) => {
    const diffMs = Date.now() - new Date(date);
    const dateFromEpoch = new Date(diffMs);
    const dateDiff = Math.abs(dateFromEpoch.getUTCFullYear() - 1970)
    return dateDiff 
}

export default formatDate;
