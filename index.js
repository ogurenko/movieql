import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// console.log("draaaaaaaaaaaa");

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers: resolvers,
});

server.start(() => console.log("Server is running on my machine"));
