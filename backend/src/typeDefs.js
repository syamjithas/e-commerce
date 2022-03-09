import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cat!]!
    dogs: [Dog!]!
    persons:[Person!]!
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Dog {
    id: ID!
    name: String!
  }
  input address {
    address_line1: String,
    city: String
    state: String
    pobox: String
  }
  input address_index {
    present:address
    permananet:address
    both_same: Boolean
    preferred_address:String 
  }
  input phone {
    ph:Int
    isPrimary:Boolean
    type:String
  }
  input email {
    email:String
    isPrimary:Boolean
    type:String
  }
  input sn {
    address:String
    type:String
  }
  input contact {
    telephonic:[phone],
    mobile:[phone],
    e_mail:[email],
    social_profile:[sn]
 }

  input Person {
    id: ID!
    username: String
    first_name: String
    second_name: String
    age: Int
    dob: String
    gender: String
    addresss: address_index
    contacts: contact
  }

  type Mutation {
    createCat(name: String!): Cat!
  }

  type Mutation {
    createDog(name: String!): Dog!
  }

  type Mutation {
    createPerson(name : String!): Person!
  }
`;
