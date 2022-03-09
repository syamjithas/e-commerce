import { Cat } from "./models/Cat";
import { Dog } from "./models/Dog";
import { Person } from "./models/Person";

export const resolvers = {
  Query: {
    hello: () => "hi",
    cats: async () => await Cat.find(),
    dogs: async () => await Dog.find(),
    Persons: async () => await Person.find()
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      return kitty;
    },
    createDog: async (_, { name }) => {
      const puppy = new Dog({ name });
      await puppy.save();
      return puppy;
    },
    createPerson: async (_, { name }) => {
      const cust = new Person({ name });
      await cust.save();
      return cust;
    }
  }
};
