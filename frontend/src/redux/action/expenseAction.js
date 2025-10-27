import { EXPENSES_TYPE } from "../type";
import * as api from "../api";
import { toast } from "react-toastify";

export const getExpenses = () => async (dispatch) =>{
  try {
        const {data} = await api.getExpense();
        console.log(data);
    dispatch({
      type: EXPENSES_TYPE.GET_EXPENSES,
      payload: data.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const createExpenses = (expenseitem) => async (dispatch)=>{
    try {
          const {data} = await api.createExpense(expenseitem);
          console.log(data);
        dispatch({
            type:EXPENSES_TYPE.CREATE_EXPENSE,
            payload: data.data
        })
    } catch (err) {
        console.log(err);
        
    }
};


export const deleteExpense =(id) => async (dispatch)=>{
  try{
    const {data}= await api.deleteExpense(id)
    dispatch({
      type:EXPENSES_TYPE.DELETE_EXPENSE,
      payload:data.id
    })
    toast.success(data.msg)

  } catch(err){
    console.log(err);
    
  }
}
