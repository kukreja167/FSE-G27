"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//typeNarrowing
function uppercase(arg) {
    if (typeof arg === "string") {
        return arg.toUpperCase();
    }
    else {
        return arg;
    }
}
uppercase("hello");
let u1 = {
    name: "Alice",
    age: 25,
    // phone:1234567890
};
function getUserPhone(user) {
    // if(user.phone){
    //     return user.phone;
    // }
    if ("phone" in user) {
        return user.phone;
    }
    else {
        return 0;
    }
}
let res = getUserPhone(u1);
let Us1 = {
    role: "user",
};
let admin = {
    role: "admin",
    permission: ["read", "write", "update"]
};
function writeBlog(user) {
    if (user.permission) {
        let permission = user.permission;
        if (permission.includes("write")) {
            return "Blog written successfully";
        }
    }
    return "You don't have permission to write blog";
}
console.log(writeBlog(admin));
console.log(writeBlog(Us1));
function sendresponse(res) {
    if (res.status === "200") {
        return res.data;
    }
    else {
        return res.message;
    }
}
//# sourceMappingURL=typeNarrowing.js.map