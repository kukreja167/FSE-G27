import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const books = [
    {
        title: "The Great Gatsby by F. Scott Fitzgerald"
    },
    {
        title: "To Kill a Mockingbird by Harper Lee"
    },
    {
        title: "To Kill a Mockingbird by Harper Lee"
    },
    {
        title: "1984 by George Orwell"
    }
]
const authors = [
    {
        name: "F. Scott Fitzgerald"
    },
    {
        name: "Harper Lee"
    },
    {
        name: "George Orwell"
    }
]

const typeDefs = `#graphql
union SearchResult = Book | Author


type Book {
  title: String!
}

type Author {
  name: String!
}

type Query {
  search(contains: String): [SearchResult!]
}
        
`
const resolvers = {
    SearchResult: {
        __resolveType(obj, contextValue, info){
      // Only Author has a name field
      if(obj.name){
        return 'Author';
      }
      // Only Book has a title field
      if(obj.title){
        return 'Book';
      }
      return null; // GraphQLError is thrown
    }
    },
    Query:{
        
        search:(parent,args,context,info)=>{
            const {contains} = args;
            const bookRes = books.filter(book => book.title.includes(contains));
            const authorRes = authors.filter(author => author.name.includes(contains));
            return [...bookRes,...authorRes];
            
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers
});
const { url } = await startStandaloneServer(server,{
    listen:{port:4000}
});
console.log(`Server is running at ${url}`);