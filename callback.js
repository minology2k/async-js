function asyncOperation1(callback) {
  setTimeout(function () {
    console.log("Async Operation 1");
    callback("Result 1");
  }, 2000);
}

function asyncOperation2(data, callback) {
  setTimeout(function () {
    console.log("Async Operation 2 with", data);
    callback("Result 2");
  }, 2000);
}

function asyncOperation3(data, callback) {
  setTimeout(function () {
    console.log("Async Operation 3 with", data);
    callback("Result 3");
  }, 2000);
}

function asyncOperation4(data, callback) {
  setTimeout(function () {
    console.log("Async Operation 4 with", data);
    callback("Result 4");
  }, 2000);
}

asyncOperation1(function (result1) {
  asyncOperation2(result1, function (result2) {
    asyncOperation3(result2, function (result3) {
      asyncOperation4(result3, function (result4) {
        console.log("Final result:", result4);
        // ...more nested callbacks
      });
    });
  });
});
