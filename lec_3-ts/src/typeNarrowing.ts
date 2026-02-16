//typeNarrowing
function uppercase(arg:number | string){
    if(typeof arg === "string"){
return arg.toUpperCase();
    }
    else{
        return arg;
    }
}
uppercase("hello");
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
function getUserPhone(user:user):number{
    // if(user.phone){
    //     return user.phone;
    // }
    if("phone" in user){
    return user.phone!;
}
else{
    return 0;
}
}
let res=getUserPhone(u1);
// console.log(res);
interface person{
    role:string;
    permission?:string[];
}
let Us1:person={
    role:"user",

};
let admin:person={
    role:"admin",
    permission:["read","write","update"]
};
function writeBlog(user:person){
    if(user.permission){
        let permission=user.permission;
        if(permission.includes("write")){
            return "Blog written successfully";
        }
    }
    return "You don't have permission to write blog";
}
console.log(writeBlog(admin));
console.log(writeBlog(Us1));
type sucess ={
    status:"200",
    data:[];
}
type error={
    status:"400",
    message:"";
}
type response=sucess | error;
function sendresponse(res:response){
    if(res.status==="200"){
        return res.data;
    }
    else{
        return res.message;
    }
}



