import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs} from "./schema.js";
import db from "./_db.js";

// resolvers
const resolvers = {
    Query: {
      games() {
        return db.games
      },
      authors() {
        return db.authors
      },
      reviews() {
        return db.reviews
      },
    }
  }

const server = new ApolloServer({
typeDefs,
resolvers
});

const {url} = await startStandaloneServer(server, { listen: {port:3000}});
console.log("Sever ready at port 3000");