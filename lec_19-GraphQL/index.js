import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import  jwt  from 'jsonwebtoken';
let users=[
    {
        id:"1",
        name:"Sargun",
        email:"sargun@example.com",
        password:"sargun123",
        phone:12345
    },
    {
        id:"2",
        name:"Kavya",
        email:"kavya@example.com",
        password:"kavya123",
        phone:9999
    },
    {
        id:"3",
        name:"kk1",
        email:"kk1@gmail.com",
        password:"kk123",
        phone:1234
    },
    {
        id:"4",
        name:"kk2",
        email:"kk2@gmail.com",
        password:"kk123",   
        phone:5678
    },
    {
        id:"5", 
        name:"kk3",
        email:"kk3@gmail.com",
password:"kk123",
        phone:9876
    }
]
let blogs=[
    {
        id:"1",
        title:"blog1",
        content:"this is blog1",
        date:"2024-06-01",
        userId:"1"
    },
    {
        id:"2",
        title:"blog2",
        content:"this is blog2",
        date:"2024-06-02",
        userId:"2"
    },
    {
        id:"3",
        title:"blog3",
        content:"this is blog3",
        date:"2024-06-03",
        userId:"3"
    }
]

const typeDefs = `
#User ==> comment

type User{
id:ID!, # ID serialized into string && ! this means that this field is required and cannot be null
name:String!,
email:String!,
passsword:String!,
phone:Int
blog:[blog] # one to many relationship
}
type blog{
id:ID!,
title:String!,
content:String!,
date:String!,
userId:ID!
user:User 
}
type loginResponse{
message:String,
token:String
}
type addblogResponse{
message:String,
blog:blog
}
type Query{
getUsers:[User] # getUsers is a query that returns an array of User objects
getOneUser(id:ID!):User # getOneUser is a query that returns a single User object
getBlogs:[blog]
getOneBlog(id:ID!):blog
}
#Mutation
type Mutation{
   addUser(id:ID!,name:String,email:String,phone:Int):User
   deleteUser(id:ID!):User
   updateUser(id:ID!,name:String,email:String,phone:Int):User
   addBlog(id:ID!,title:String,content:String,date:String):addblogResponse
   deleteBlog(id:ID!):blog
   updateBlog(id:ID!,title:String,content:String,date:String,userId:ID!):blog
   login(email:String!,password:String!):loginResponse
   }
`;

const resolvers = {
    Query:{
        getUsers:()=>{
            // db call
            return users;

        },
        // in resolvers we have 4 arguments in same order parent, args, context, info --> optional // args are objects which contains all the input
        getOneUser:(_,args)=>{
            return users.find(user => user.id === args.id);
        },
        getBlogs:()=>{
            // db call
            return blogs;
        },
        getOneBlog:(_,args)=>{
            return blogs.find(blog => blog.id === args.id);
        }
    },
    Mutation:{
        addUser:(_,args)=>{
            // args --> id,name,email,phone
            let {id,name,email,phone} = args;// known as destructuring like retrieving the values from the args object
            // logic to add this new user to database
            let newUser={
                id:id,
                name:name,
                email:email,
                phone:phone
            }
            users.push(newUser);
            return newUser;
        },
        deleteUser:(_,args)=>{
            let {id} = args;
            let deluser = users.find(u => u.id === id);
            users = users.filter(u => u.id !== id);
            return deluser;
        },
        updateUser:(_,args)=>{
            let {id,name,email,phone} = args;
            let user = users.find(u => u.id === id);
            if(user){
                user.name = name ;
                user.email = email ;
                user.phone = phone ;
                return user;
            }
            return null; // or throw an error if user not found
        },
        addBlog:(_,args,context)=>{
            let {userId} = context;
            if(!userId){
                return{
                    message:context.message,
                    blog:null
                }
            }
            let {id,title,content,date} = args;
            let newBlog={
                id:id,
                title:title,
                content:content,
                date:date,
                userId:userId
            }
            blogs.push(newBlog);
            return {message:"Blog added sucessfully",blog:newBlog};
        },
        deleteBlog:(_,args)=>{
            let {id} = args;
            let delblog = blogs.find(b => b.id === id);
            blogs = blogs.filter(b => b.id !== id);
            return delblog;
        },
        updateBlog:(_,args)=>{
            let {id,title,content,date,userId} = args;
            let blog = blogs.find(b => b.id === id);
            if(blog){
                blog.title = title ;
                blog.content = content ;
                blog.date = date ;
                blog.userId = userId ;
                return blog;
            }
            return null; // or throw an error if blog not found
        },
        //implement login muatation with JWt
        login:(_,args)=>{
            let {email,password} = args;
            let user = users.find(u => u.email === email);
            if(user ){ 
                if(user.password===password){ 
                    let token = jwt.sign({id:user.id},'secretkey');
                    return {message:"Login sucessful",token};
                }
                else{
                    return {message:"invalid password",token:null};
                }
            }
            return {message:"user not found",token:null};
        }

    },

    User:{
        blog:(parent)=>{//parent is the output of the user query that is run before this resolver
            let userBlogs = blogs.filter(b => b.userId === parent.id);
            return userBlogs;
        }
    },
    blog:{
        user:(parent)=>{
            let blogUser = users.find(u => u.id === parent.userId);
            return blogUser;
        }
    }
   
    
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, 
    {
        listen: { port: 3004 },
        context: async ({ req }) => {

            const token = req.headers.authorization ;
            if(!token){
                return {
                    message:"User not Logged in",
                    userId:null
                };
            }
            try {

                const decoded = jwt.verify(token, 'secretkey');
                if(!decoded){
                    return {
                        message:"Invalid token",
                        userId:null
                    };
                }

                return { message:"user Logged in",userId:decoded.id };
            } catch (err) {
              console.log(err);
                return {message:"Error in token verification",userId:null};
            }
        }
  
});
console.log(`🚀  Server ready at: ${url}`);