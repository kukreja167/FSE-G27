// Union
// let a=10;
// a="18";
type numstr=number | string;
let a:numstr;
a=10;
console.log(a);
a="hello";
console.log(a);
// a=true //error
interface employee{
    name:string;
    empid:number | string;
    age:number;
    dept:string | number;
    salary:number;
    phone: number;
}

interface teamlead{
    name:string;
    empid:number | string;
    age:number;
    dept:string | number;
    salary:number;
    projectid:number;
    projectname:string;
    isActive:boolean;
}
// union type -------> '|'
type emporteam=employee | teamlead;
let emp1:emporteam={
    name:"john",
    empid:"abc_2026",
    age:30,
    dept:"IT",
    salary:60000,
    // phone:1234567890,
    projectid:101,
    projectname:"Project A",
    isActive:true
};
//intersection type -------> '&'
type empandteam=employee & teamlead;
let emp2:empandteam={
    name:"john",
    empid:"abc_2026",
    age:30,
    dept:"IT",
    salary:60000,
    phone:1234567890,
    projectid:101,
    projectname:"Project A",
    isActive:true,
    bloodgroup:"O+"
};
// Can i create a union or intersection using interface ?
// interface empandteam2: employee & teamlead; //error ❌
interface employee{
    bloodgroup:string;
}
let emp3:employee={
    name:"Alice",
    empid:7890,
    age:28,
    dept:"yvbuh",
    salary:75000,
    phone:9876543210,
    bloodgroup:"B+"
};
console.log(emp3.dept);
console.log(emp1.age);
// type teamlead={}; Not Possible ❌ 
// Difference between type and interface :
// 1. interface can be extended , type cannot be extended.
// 2. interface can be merged or expanded , type cannot be merged or expanded.
// 3. interface can only be used to define the structure of an object , type can be used to define primitive data types , union , intersection.
// 4. interface can implement class , type cannot implement class.
