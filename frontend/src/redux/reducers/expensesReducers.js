import { v4 as uuid } from "uuid";
import {EXPENSES_TYPE}  from "../type";

const initialState = {
  expenses: [
    {
      item: "Shoe",
      value: 90.99,
      id: uuid(),
    },
    {
      item: "Bag",
      value: 190.99,
      id: uuid(),
    },
    {
      item: "Food",
      value: 290.99,
      id: uuid(),
    },
  ],
};

const expenses = (state = initialState, action) => {
  switch (action.type) {
    case EXPENSES_TYPE.GET_EXPENSES:
      return{
        ...state,
        expenses: action.payload
      }
    case EXPENSES_TYPE.CREATE_EXPENSE:
       return {
         ...state,
         expenses: [...state.expenses, action.payload],
         };   
    default:
      return state;
  }
};

export default expenses;
