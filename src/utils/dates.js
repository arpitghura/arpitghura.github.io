export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const getMonth = (date) => months[new Date(date).getMonth()];

export const getFullYear = (date) => new Date(date).getFullYear();

export const getMonthYear = (date) => `${getMonth(date)} ${getFullYear(date)}`;

export const getStartEndDate = (startDate, endDate) => {
    if (!startDate) return "";
    if (!endDate) return `${getMonthYear(startDate)} — Present`;
    return `${getMonthYear(startDate)} — ${getMonthYear(endDate)}`;
};

export const getStartEndYear = (startDate, endDate) => {
    if (!startDate) return "";
    if (!endDate) return `${getFullYear(startDate)} — Present`;
    return `${getFullYear(startDate)} — ${getFullYear(endDate)}`;
};

