async function delayResult(n1, n2, delayTime, callback) {
  setTimeout(() => {
    callback(n1 + n2);
  }, delayTime);
}

delayResult(4, 5, 3000, async function (result) {
  console.log(result);
}); // 9 after 3 seconds

delayResult(-5, 10, 2000, async function (result) {
  alert(result);
}); // 5 after 2 seconds
