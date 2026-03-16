// HomeWork - Implement a GraphQL server with the following functionalities:

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
let users=[
    {
        id:"1",
        name:"Sargun",
        email:"sargun@example.com",
        phone:12345
    },
    {
        id:"2",
        name:"Kavya",
        email:"kavya@example.com",
        phone:9999
    },
    {
        id:"3",
        name:"kk1",
        email:"kk1@gmail.com",
        phone:1234
    },
    {
        id:"4",
        name:"kk2",
        email:"kk2@gmail.com",
        phone:5678
    },
    {
        id:"5", 
        name:"kk3",
        email:"kk3@gmail.com",
        phone:9876
    }
]
let blogs=[
    {
        id:"1",
        title:"blog1",
        content:"this is blog1",
        date:"2024-06-01"
    },
    {
        id:"2",
        title:"blog2",
        content:"this is blog2",
        date:"2024-06-02"
    },
    {
        id:"3",
        title:"blog3",
        content:"this is blog3",
        date:"2024-06-03"
    }
]

const typeDefs = `
#User ==> comment

type User{
id:ID!, # ID serialized into string && ! this means that this field is required and cannot be null
name:String!,
email:String!,
phone:Int
}
type blog{
id:ID!,
title:String!,
content:String!,
date:String!,
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
   addBlog(id:ID!,title:String,content:String,date:String):blog
   deleteBlog(id:ID!):blog
   updateBlog(id:ID!,title:String,content:String,date:String):blog
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
        addBlog:(_,args)=>{
            let {id,title,content,date} = args;
            let newBlog={
                id:id,
                title:title,
                content:content,
                date:date
            }
            blogs.push(newBlog);
            return newBlog;
        },
        deleteBlog:(_,args)=>{
            let {id} = args;
            let delblog = blogs.find(b => b.id === id);
            blogs = blogs.filter(b => b.id !== id);
            return delblog;
        },
        updateBlog:(_,args)=>{
            let {id,title,content,date} = args;
            let blog = blogs.find(b => b.id === id);
            if(blog){
                blog.title = title ;
                blog.content = content ;
                blog.date = date ;
                return blog;
            }
            return null; // or throw an error if blog not found
        }

    }
}
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});
console.log(`🚀  Server ready at: ${url}`);