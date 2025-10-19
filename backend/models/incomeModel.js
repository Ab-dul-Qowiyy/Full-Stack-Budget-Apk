import mongoose from "mongoose";

const incomesSchema = new mongoose.Schema({
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

const Incomes = mongoose.model('incomes', incomesSchema)

export default Incomes;