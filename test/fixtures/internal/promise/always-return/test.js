// oxlint-disable id-length
// oxlint-disable no-unused-vars
// oxlint-disable promise/prefer-await-to-then
// oxlint-disable promise/catch-or-return
// oxlint-disable no-empty-function
// oxlint-disable func-names
// oxlint-disable no-undef
myPromise.then(function (val) {});
myPromise.then(() => {
  doSomething();
});
myPromise.then((b) => {
  if (b) {
    return "yes";
  }
    forgotToReturn();

});
