import express from "express";
import expensesControllers from "../controllers/expenseControllers.js";
import auth from "../middleware/auth.js";

const expenseRouter = express.Router();

expenseRouter.get("/", auth, expensesControllers.getallExpenses);
expenseRouter.post("/create", auth, expensesControllers.createExpense);
expenseRouter.delete(
  "/delete/:expenseId",
  auth,
  expensesControllers.deleteExpense
);

export default expenseRouter;
