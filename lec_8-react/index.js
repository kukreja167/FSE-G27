// import { cloneElement } from "react";

let obj={a:10,b:{c:20}}
let newObj ={...obj};
newObj.b.c=50;
console.log(obj.b.c)
