import mongoose from "mongoose";

export const Person = mongoose.model("Person", {
  username: String,
  first_name: String,
  second_name: String,
  age: Number,
  dob: Date,
  gender: String,
  address: {
    present: {
      address_line1: String,
      city: String,
      state: String,
      pobox: String,
    },
    permananet: {
      address_line1: String,
      city: String,
      state: String,
      pobox: String,
    },
    both_same: Boolean,
    preferred_address:String 
  },
  contacts:{
      telephonic:[{ph:String,
        isPrimary:Boolean,
        ph_type:String}],
      mobile:[{ph:String,
        isPrimary:Boolean,
        ph_type:String}],
      e_mail:[{email:String,
        isPrimary:Boolean,
        e_type:String}],
      social_profile:[{address:String,
        sn_type:String}]
  }
});
