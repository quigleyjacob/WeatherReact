// var names = ["Andrew", "Jacob", "Jill", "Kenny", "Fred"];
//
// names.forEach(function(name) {
//     console.log("forEach", name);
// });
//
// names.forEach((name) => {
//     console.log("arrow fxn", name);
// });
//
// var returnMe = (name) => (name + "!");
//
// console.log(returnMe("Jacob"));
//
// var person = {
//     name: "Jacob",
//     greet: function() {
//         names.forEach((name) => {
//             console.log(this.name + " says hi to " + name);
//         });
//     }
// };
//
// person.greet();

// Challenge Area

function add (a, b) {
    return a + b;
}

var addStatement = (a,b) => {
    return a+b;
};
var addExpression = (a,b) => (a+b);

console.log(add(2, 3));
console.log(add(9, 0));
console.log(addStatement(4, 7));
console.log(addExpression(5, 11));
