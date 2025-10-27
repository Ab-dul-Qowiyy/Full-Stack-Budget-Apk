import Expenses from "../models/expensesModel.js";


const expensesControllers = {
  getallExpenses: async (req, res) => {
    try {
      const expense = await Expenses.find({user:req.user.id});
      return res.status(200).json({ msg: "All expenses", data: expense });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ msg: err.message });
    }
  },
  createExpense: async (req, res) => {
    try {
      const { item, amount } = req.body;

      if (!item || !amount) {
        return res.status(400).json({
          msg: "please fill in the fields",
        });
      }

      const newExpense = new Expenses({
        item,
        amount,
        
        user: req.user.id
      });

      await newExpense.save();

      return res.status(201).json({
        msg: "New expense created successfully",
        data: newExpense,
      });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteExpense: async (req, res) => {
    try {
      const { expenseId } = req.params;
      const id = await Expenses.findById({ _id: expenseId });
      if (!id) return res.status(400).json({ msg: "expense does not exist" });

      const deleteExpense = await Expenses.findByIdAndDelete(expenseId);
      return res
        .status(200)
        .json({ msg: "Expense deleted successfully", data: deleteExpense });
    } catch (err) {
      return res.status(500).json({ msg: err });
    }
  },
};
export default expensesControllers;
