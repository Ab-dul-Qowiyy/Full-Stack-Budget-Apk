import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExpenses, getUserExpenses } from "../../redux/action/expenseAction";
import Expenseslist from "./Expenseslist";
import ExpenseForm from "./ExpenseForm";
import styled from "styled-components";

const Div = styled.div`
  @media (max-width: 500px) {
    /* margin-right: 90%; */
    h1 {
      /* margin-right: 90%; */
      font-size: 20px;
      /* width: 400px; */
    }
  }
`;

const Value = styled.span`
  color: Red;
`;

const user = JSON.parse(localStorage.getItem('user'));



const Expense = ({ expense, setExpense, expenseTotal, handleDelete }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getExpenses());
    dispatch(getUserExpenses(user._id))
  }, []);

  return (
    <Div>
      <ExpenseForm setExpense={setExpense} expense={expense} />
      <h1>Expense List</h1>
      {expense.map((expenses) => (
        <Expenseslist
          key={expenses._id}
          expense={expenses}
          handleDelete={handleDelete}
        />
      ))}

      <div>
        <h1>
          Total: <Value>-${expenseTotal}</Value>
        </h1>
      </div>
    </Div>
  );
};

export default Expense;
