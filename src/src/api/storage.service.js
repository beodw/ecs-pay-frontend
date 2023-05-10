const key = 'businesshub-cms';

export const storeItem = (type, item) => localStorage.setItem(`${key}-${type}`, item);
export const getItem = (type) => localStorage.getItem(`${key}-${type}`);
export const destroyItem = (type) => localStorage.removeItem(`${key}-${type}`);
