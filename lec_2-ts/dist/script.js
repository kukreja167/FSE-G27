"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = 10;
console.log(a);
a = "hello";
console.log(a);
let emp1 = {
    name: "john",
    empid: "abc_2026",
    age: 30,
    dept: "IT",
    salary: 60000,
    // phone:1234567890,
    projectid: 101,
    projectname: "Project A",
    isActive: true
};
let emp2 = {
    name: "john",
    empid: "abc_2026",
    age: 30,
    dept: "IT",
    salary: 60000,
    phone: 1234567890,
    projectid: 101,
    projectname: "Project A",
    isActive: true,
    bloodgroup: "O+"
};
let emp3 = {
    name: "Alice",
    empid: 7890,
    age: 28,
    dept: "yvbuh",
    salary: 75000,
    phone: 9876543210,
    bloodgroup: "B+"
};
console.log(emp3.dept);
console.log(emp1.age);
// type teamlead={}; Not Possible ❌ 
// Difference between type and interface :
// 1. interface can be extended , type cannot be extended.
// 2. interface can be merged or expanded , type cannot be merged or expanded.
// 3. interface can only be used to define the structure of an object , type can be used to define primitive data types , union , intersection.
//# sourceMappingURL=script.js.map