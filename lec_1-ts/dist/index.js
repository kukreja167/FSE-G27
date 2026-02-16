"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log(user);
let user1 = {
    name: "Bob",
    age: 25,
    city: "Los Angeles"
};
console.log(user1);
let p = {
    name: "Charlie",
    age: 28
};
console.log(p);
//array types
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c"];
let arr3 = [true, false, true];
//tuple
let tup = ["hello", 100, true];
let alluser = [{
        name: "David",
        age: 40,
    }, {
        name: "Eva",
        age: 35,
    }];
function printalluser(user) {
    for (let u of user) {
        console.log(`Name: ${u.name}, Age: ${u.age}`);
    }
}
printalluser(alluser);
//# sourceMappingURL=index.js.map