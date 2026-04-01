// oxlint-disable unicorn/no-array-callback-reference
// oxlint-disable unicorn/no-array-reduce
// oxlint-disable no-unused-vars
function add(x: number, y: number) {
  return x + y;
}
function sum() {
  // @ts-expect-error Only for testing purposes.
  return arguments.reduce(add, 0);
}
