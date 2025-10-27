import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    max: 20,
    min: 3,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    max: 20,
    min: 3,
    trim: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
    
  },
  password: {
    type: String,
    required: true,
    max: 20,
    min:9,
  },

},{timestamps:true});

const User = mongoose.model('Users', userSchema);

export default User;