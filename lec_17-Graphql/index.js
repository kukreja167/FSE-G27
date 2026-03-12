import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
let users = [
    {
        id: 1,
        name: "Kavya",
        email: "kavya123@gmail.com",
        phone: 12345
    },
{
        id: 2,
        name: "Sargun",
        email: "sargun@gmail.com",
        phone: 98765
}]
    
const typeDefs = `

 type User {
    id: ID!, # ! means that this field is required || ID serialised as a string
    name: String,
    email: String,
    phone: Int
  }
  type Query {
    getUsers: [User],
    getOneUser(id:ID!): User
  }
`;

const resolvers = {
    Query:{
getUsers:() =>{
return users;
},
//in resolvers we have four arguments ---> parent, args, context, info--->optional
//args are object which contains the arguments passed in the query
getOneUser:(_,args)=>{
return users.find((user) => user.id === parseInt(args.id));
}
    
}

};
//Query - It is basically a get request to fetch data from the server
//Mutation - It is basically a post,put,update,delete request to send data to the server
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`Server ready at ${url}`);