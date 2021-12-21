export const getElement = (selector, parent = document) => {
  return parent.querySelector(selector);
};

export const getElements = (selector, parent = document) => {
  return Array.from(parent.querySelectorAll(selector));
};
