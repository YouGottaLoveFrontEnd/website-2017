import './AutoHeightFix.css';

const CELL = 45;

export const GetElementHeight = element => {
  element.removeAttribute('style');
  return Math.ceil(element.offsetHeight / CELL) * CELL;
};

export const SetElementHeight = (element, height) => {
  return (element.style.height = Math.round(height) + 'px');
};

export const AutoHeightFix = (elements, extra) => {
  if (!elements) return;
  for (let i = 0; i < elements.length; i++) {
    SetElementHeight(elements[i], GetElementHeight(elements[i]) + (extra || 0));
  }
};
