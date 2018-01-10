// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback("City not found");
// }
//
// getTempCallback("Chicago", function(err, temp) {
//     if (err) {
//         console.log("error", err);
//     } else {
//         console.log("success", temp);
//     }
// });
//
// function getTempPromise (location) {
//     return new Promise(function(resolve, reject) {
//         resolve(79);
//         resolve("City not found");
//     });
// }
//
// getTempPromise("Chicago").then(function(temp) {
//     console.log("promise success", temp);
// }, function(err) {
//     console.log("Promise error", err);
// })

// Challenge Area

function addPromise (a,b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === "number" && typeof b === "number") {
            resolve(a+b);
        } else {
            reject("One or more inputs are not numbers");
        }
    });
}

addPromise(214892374891, 836498134).then(function(sum) {
    console.log("success", sum);
}, function(err) {
    console.log("error", err);
})
