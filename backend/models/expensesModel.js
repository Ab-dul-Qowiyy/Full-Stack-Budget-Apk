import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema.Types

const expensesSchema = new mongoose.Schema({
  item: {
    type: String,
    trim: true,
    required: true,
  },
  amount: {
    type: Number,
    trim: true,
    required: true,
  },
  postedBy: {
    ref: 'User',
    type: ObjectId
  }
},{timestamps: true});

const expenses = mongoose.model('expenses', expensesSchema)

export default expenses;