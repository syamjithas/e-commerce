import { Person } from "./models/Person";

export const resolvers = {
  Query: {
    hello: () => "hi",
    persons: async () => await Person.find()
  },
  Mutation: {
    createPerson: async (_, p) => {
      console.log(p.input)
      const cust = new Person(p.input);
      console.log(cust)
      await cust.save();
      return cust
    }
  }
};
