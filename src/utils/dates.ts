export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const getMonth = (date: string | Date) => months[new Date(date).getMonth()];

export const getFullYear = (date: string | Date) => new Date(date).getFullYear();

export const getMonthYear = (date: string | Date) => `${getMonth(date)} ${getFullYear(date)}`;

export const getStartEndDate = (startDate: string | Date | null | undefined, endDate: string | Date | null | undefined) => {
    if (!startDate) return "";
    if (!endDate) return `${getMonthYear(startDate)} — Present`;
    return `${getMonthYear(startDate)} — ${getMonthYear(endDate)}`;
};

export const getStartEndYear = (startDate: string | Date | null | undefined, endDate: string | Date | null | undefined) => {
    if (!startDate) return "";
    if (!endDate) return `${getFullYear(startDate)} — Present`;
    return `${getFullYear(startDate)} — ${getFullYear(endDate)}`;
};
