import * as path from "path";
import * as fs from "fs";
import { makeExecutableSchema } from "apollo-server-express";
import { resolvers } from "../resolvers/resolvers";

const schemaDef = fs
  .readFileSync(path.resolve(__dirname, "./schema.graphql"))
  .toString("utf8");

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs: [schemaDef],
});
