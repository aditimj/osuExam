
export  const putDataInStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getDataFromstorage = (key) => {
    return localStorage.getItem(key);
}