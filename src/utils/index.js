export const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const navDelay = 500;
export const loaderDelay = 1000;

export const KEY_CODES = {
  ARROW_LEFT: 'ArrowLeft',
  ARROW_LEFT_IE11: 'Left',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_RIGHT_IE11: 'Right',
  ARROW_UP: 'ArrowUp',
  ARROW_UP_IE11: 'Up',
  ARROW_DOWN: 'ArrowDown',
  ARROW_DOWN_IE11: 'Down',
  ESCAPE: 'Escape',
  ESCAPE_IE11: 'Esc',
  TAB: 'Tab',
  SPACE: ' ',
  SPACE_IE11: 'Spacebar',
  ENTER: 'Enter',
};

export const getReadingTime = html => {
  const stripped = html.match(/<(.|\n)*?>/g).reduce((acc, cur) => acc.replace(cur, ''), html);
  const wordsPerMinute = 200;
  const minutes = Math.ceil(stripped.split(' ').length / wordsPerMinute);
  return `${minutes} min${minutes > 1 ? 's' : ''} read`;
};
