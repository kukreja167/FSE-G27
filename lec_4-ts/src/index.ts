//enum ---> set of constant values;
type Role = "admin" | "user"

// function addblog(role:string):string{
//     if(role=="user"){
//         return "not authorize"
//     }
//     //blog add
//     return "blog added"
// }
function addblog(role:Role):string{
    if(role=="user"){
        return "not authorize"
    }
    //blog add
    return "blog added"
}
let message=addblog("admin");
let message2=addblog("user");
// addblog("dhjkl");

//enum

// enum Role2{
//     user,
//     admin
// }
// enum Role2{
//     user=1,
//     admin=20
// }
enum Role2{
    user="user",
    admin="admin"
}

console.log(Role2.user)
console.log(Role2.admin);


function addblog2(role:Role2):string{
    if(role=="user"){
        return "not authorize"
    }
    //blog add
    return "blog added"
}
addblog2(Role2.user);
addblog2(Role2.admin);


//Type any

let a:any; // treat like javascript
a:"fghjk";
a:10;

let b;

