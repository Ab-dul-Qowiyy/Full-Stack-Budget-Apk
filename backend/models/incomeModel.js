import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const incomesSchema = new mongoose.Schema(
  {
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
      ref: "Users",
      type: ObjectId,
    },
  },
  { timestamps: true }
);

const Incomes = mongoose.model("incomes", incomesSchema);

export default Incomes;
