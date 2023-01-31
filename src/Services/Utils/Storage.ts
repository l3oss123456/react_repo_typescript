// ================== localStorage ==================

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key) !== null
    ? JSON.parse(localStorage.getItem(key) || "")
    : null;
};

export const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

// ================== sessionStorage ==================

export const getSessionStorage = (key: string) => {
  return sessionStorage.getItem(key) !== null
    ? sessionStorage.getItem(key)
    : null;
};

export const setSessionStorage = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const removeSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};
