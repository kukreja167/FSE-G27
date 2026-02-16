"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function firstvalue(arr) {
    return arr[0];
}
let val = firstvalue([1, 2, 3, 4]);
// console.log(firstvalue(["a","b","c"]));
// val.toLowerCase(); //error ❌
//to solve this we use generics
function firstvaluegen(arr) {
    return arr[0];
}
let val2 = firstvaluegen(["a", "b", "c"]);
val2?.toLowerCase();
let val3 = firstvaluegen([1, 2, 3, 4]);
val3?.toString();
let u1 = {
    name: "Alice",
    age: 25,
    // phone:1234567890
};
console.log(u1.phone);
//# sourceMappingURL=script.js.map