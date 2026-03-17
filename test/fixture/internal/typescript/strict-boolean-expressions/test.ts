// oxlint-disable no-undefined
// oxlint-disable no-eq-null
// oxlint-disable eqeqeq
// oxlint-disable no-ternary
// oxlint-disable no-unused-vars
// oxlint-disable no-undef
// oxlint-disable no-console
// oxlint-disable typescript/no-unnecessary-condition

const str = "hello";
if (str) {
  console.log("string");
}

const num = 42;
if (num) {
  console.log("number");
}

const obj = { foo: "bar" };
if (obj) {
  console.log("object");
}

declare const maybeString: string | undefined;
if (maybeString) {
  console.log(maybeString);
}


declare const maybeBool: boolean | undefined;
if (maybeBool) {
  console.log(maybeBool);
}

declare const maybeObject: { foo: string } | null;
if (maybeObject) {
  console.log(maybeObject.foo);
}

declare const maybeNullOrUndefined: string | null | undefined;
if (maybeNullOrUndefined != null) {
  console.log(maybeNullOrUndefined);
}
if (maybeNullOrUndefined !== undefined) {
  console.log(maybeNullOrUndefined);
}

const result = str && num;
const ternary = str ? "yes" : "no";
