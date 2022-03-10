import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    persons:[Person!]!
  }


  input address_input {
    address_line1: String,
    city: String
    state: String
    pobox: String
  }

  type address {
    address_line1: String,
    city: String
    state: String
    pobox: String
  }

  input address_index_input {
    present:address_input
    permananet:address_input
    both_same: Boolean
    preferred_address:String 
  }

  type address_index {
    present:address
    permananet:address
    both_same: Boolean
    preferred_address:String 
  }

  input phone_input {
    ph:String
    isPrimary:Boolean
    ph_type:String
  }

  type phone {
    ph:String
    isPrimary:Boolean
    ph_type:String
  }

  input email_input {
    email:String
    isPrimary:Boolean
    e_type:String
  }

  type email {
    email:String
    isPrimary:Boolean
    e_type:String
  }

  input sn_input {
    address:String
    sn_type:String
  }

  type sn {
    address:String
    sn_type:String
  }

  input contact_input {
    telephonic:[phone_input],
    mobile:[phone_input],
    e_mail:[email_input],
    social_profile:[sn_input]
 }

 type contact {
  telephonic:[phone],
  mobile:[phone],
  e_mail:[email],
  social_profile:[sn]
}

 input Person_input {
    id: ID!
    username: String
    first_name: String
    second_name: String
    age: Int
    dob: String
    gender: String
    addresss: address_index_input
    contacts: contact_input
  }

  type Person {
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
    createPerson(input : Person_input!): Person!
  }
`;
