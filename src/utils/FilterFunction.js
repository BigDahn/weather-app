export function FilterFunction(Value) {
  return Value.filter((s) => s.isChecked)[0].name;
}
