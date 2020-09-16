export const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const getItem = (key, value) => {
  localStorage.getItem(key, value);
};

export const cleanStorage = (key) => {
  if (!key) localStorage.clear();
  localStorage.removeItem(key);
};
