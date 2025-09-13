export function FahrenheitConverter(value) {
  return value * 1.8 + 32;
}

export function InchesConverter(value) {
  return Math.round(value * 0.0394);
}

export function MphConverter(value) {
  return Math.round(value * 0.6214);
}
