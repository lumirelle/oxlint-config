// oxlint-disable promise/prefer-await-to-callbacks
// oxlint-disable promise/avoid-new
// oxlint-disable no-undef
// oxlint-disable no-shadow
const foo = new Promise(async (resolve, reject) => {
  readFile("foo.txt", function foo(err, result) {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  });
});

const _ = new Promise(async (resolve) => {
  resolve(await foo);
});
