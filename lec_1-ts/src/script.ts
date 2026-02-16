//Primitive data types ----> number,string,boolean,null,undefined
let a:number;
a=90;
// a="hello" //error
console.log(a); 
function isallowedtovote(age:number):boolean{
    if(age>=18){
        return true;
    }
    return false;
}
let res:boolean=isallowedtovote(67);
function print():void{
    console.log("hello world");
}
print();