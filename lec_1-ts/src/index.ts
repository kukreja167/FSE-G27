let user:{name:string,age:number,city:string}={
  name:"Alice",
  age:30,
  city:"New York"  
}
console.log(user);

//2. using interface
interface User{
  name:string,
  age:number,
  city:string
}
let user1:User={
  name:"Bob",
  age:25,
  city:"Los Angeles"
}
console.log(user1);

//3. using type 
type person={
    name:string,    
    age:number,
}
let p:person={
    name:"Charlie",
    age:28
}
console.log(p);

//array types
let arr1:number[]=[1,2,3,4,5];
let arr2:string[]=["a","b","c"];
let arr3:boolean[]=[true,false,true];

//tuple
let tup:[string,number,boolean]=["hello",100,true];
let alluser:person[]=[{
    name:"David",
    age:40,
   
},{
    name:"Eva",
    age:35,
    
}];

function printalluser(user:person[]):void{
    for(let u of user){
        console.log(`Name: ${u.name}, Age: ${u.age}`);
    }
}
printalluser(alluser);
