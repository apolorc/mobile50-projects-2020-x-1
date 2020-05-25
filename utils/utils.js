export function leftPad(number) {
  if (number < 10) {
    return `0${number}`;
  }

  return String(number);
}