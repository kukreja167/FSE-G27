// create a function whicih takes one parameter either number[] or string[]
type numstr=number | string;
function firstvalue(arr:numstr[]){
    return arr[0];
}
let val=firstvalue([1,2,3,4]);
// console.log(firstvalue(["a","b","c"]));
// val.toLowerCase(); //error ❌
//to solve this we use generics
function firstvaluegen<T>(arr:T[]){
    return arr[0];
}
let val2=firstvaluegen<string>(["a","b","c"]);
val2?.toLowerCase();
let val3=firstvaluegen<number>([1,2,3,4]);
val3?.toString();
// what does ? mean ? -----> optional chaining

interface user{
    name:string;
    age:number;
    phone?:number;
}
let u1:user={
    name:"Alice",
    age:25,
    // phone:1234567890
};
console.log(u1.phone);
