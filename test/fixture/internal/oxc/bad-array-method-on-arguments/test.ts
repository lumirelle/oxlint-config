// oxlint-disable no-magic-numbers
// oxlint-disable id-length
// oxlint-disable func-style
// oxlint-disable no-unused-vars
function add(x: number, y: number) {
  return x + y;
}
function sum() {
  // @ts-expect-error Only for testing purposes.
  return arguments.reduce(add, 0);
}
