import { combineReducers } from "redux";

import income from "./incomeReducer";
import expenses from "./expensesReducers";
import { auth } from "./authReducer";

export const reducers = combineReducers({
  income,
  expenses,
  auth,
});
