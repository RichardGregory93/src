var mathNumber = 2;

function add(a, b) {
  let sum = a + b;
  return sum;
}

export function multiply(a, b) {
  let sum = add(a, b);
  let factor = a * b;
  return sum * factor;
}

export function textExistsCaseSensitive(text, value) {
  if (text.includes(value)) return true;
  else return false;
}

export function textExistsCaseInsensitive(text, value) {
  text = text.toLowerCase();
  value = value.toLowerCase();
  if (text.includes(value)) return true;
  else return false;
}
