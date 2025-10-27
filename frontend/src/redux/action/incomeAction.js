import { INCOME_TYPES } from "../type";
import * as api from '../api'
import { toast } from "react-toastify";

export const getIncomes =() => async (dispatch) => {
    try {
        const {data} = await api.getIncomes();
        console.log(data);
        
        dispatch({
            type: INCOME_TYPES.GET_INCOMES,
            payload: data.data
        })
    } catch (err) {
        console.log(err);
        
    }
}

export const createincomes = (incomeitems)=> async (dispatch)=>{
    try {
        const {data} = await api.createIncome(incomeitems);
        console.log(data);
        
        dispatch({
            type: INCOME_TYPES.CREATE_INCOME,
            payload: data.data
        })
        toast.success(data.msg)
        
    } catch (err) {
        console.log(err);
        if(err.response && err.response.data) {
            toast.error(err.response.data.msg)
        }
    }
}

export const getUserIncome = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUserIncome(id);
    console.log(data);
    dispatch({
      type: INCOME_TYPES.GET_INCOMES,
      payload: data.income,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteIncome =(id) => async (dispatch)=>{
  try{
    const {data}= await api.deleteIncome(id)
    dispatch({
      type:INCOME_TYPES.DELETE_INCOME,
      payload:data.id
    })
       toast.success(data.msg);


  } catch(err){
    console.log(err);
    
  }
}


