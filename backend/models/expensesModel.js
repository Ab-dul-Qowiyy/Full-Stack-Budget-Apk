import mongoose from "mongoose";

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
},{timestamps: true});

const expenses = mongoose.model('expenses', expensesSchema)

export default expenses;