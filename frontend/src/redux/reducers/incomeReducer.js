import { v4 as uuid } from "uuid";
import { INCOME_TYPES } from "../type";

const initialState = {
  income: [
    {
      item: "Salary",
      value: 1009,
      id: uuid(),
    },
    {
      item: "Gift",
      value: 59,
      id: uuid(),
    },
    {
      item: "Inheritance",
      value: 389,
      id: uuid(),
    },
  ],

 

};

const income = (state=initialState,action) => {
    switch(action.type){
        case INCOME_TYPES.GET_INCOMES:
            return {
              ...state,
              income: action.payload
            }
        case INCOME_TYPES.CREATE_INCOME:
          return{
            ...state,
            income:[...state.income, action.payload],
          }
        case INCOME_TYPES.DELETE_INCOME:
          return{
            ...state,
            income: state.income.filter(income=> income.id !==action.payload)
          }      
            default:
                return state;
    }
}
export default income;



