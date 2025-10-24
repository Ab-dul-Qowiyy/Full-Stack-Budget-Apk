import React, { useEffect, useState } from "react";
import Income from "./Income";
import Expense from "./Expense";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getIncomes } from "../../redux/action/incomeAction";
import { getExpenses } from "../../redux/action/expenseAction";
import axios from "axios";
import Logout from "../../components/Logout";

const Div = styled.div`
  max-width: 50%;
  color: purple;

  /* height: 100%;  */

  .green {
    color: green;
  }

  .red {
    color: red;
  }

  margin: 0 auto;
  padding: 2%;

  @media (max-width: 280px) {
    margin-right: 90%;
  }
`;

const Budgetlist = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    /* margin-right: 90%; */
    h1 {
      /* margin-right: 90%; */
      font-size: 20px;
      /* width: 400px; */
    }
  }
`;

const Budget = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIncomes());
    dispatch(getExpenses());
  }, []);

  const incomes = useSelector((state) => state.income.income);
  const expenses = useSelector((state) => state.expenses.expenses);

  console.log(incomes);
  console.log(expenses);

  const [income, setIncome] = useState([]);

  // const getIncomes = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:5000/api/incomes");
  //     setIncome(data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // console.log(income);

  const [expense, setExpense] = useState([]);

  // const getExpenses = async () => {
  //   try {
  //     const { data } = await axios.get("http://localhost:5000/api/expenses");
  //     setExpense(data.data);
  //     console.log("expenses ", data.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const { income } = useSelector((state) => state.income);
  // console.log(income);

  const incomeValue = incomes.map((income) => income.amount);
  let incomeTotal = incomeValue
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);

  // // incomeTotal = Math.floor(incomeTotal)
  // console.log(incomeTotal);

  //  const { expenses } = useSelector((state) => state.expenses);
  //  console.log(expenses);

  const expenseValue = expenses.map((expense) => expense.amount);
  const expenseTotal = expenseValue
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);

  console.log(expenseTotal);

  const sumTotal = incomeTotal - expenseTotal;

  const handleIncomeDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://budget-backend-two.vercel.app/api/incomes/delete/${id}`
      );
      console.log(data);
      setIncome(income.filter((income) => income._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const handleExpenseDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://budget-backend-two.vercel.app/api/expenses/delete/${id}`
      );
      console.log(data);
      setExpense(expense.filter((expense) => expense._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Div>
      <Header>
        <h1>
          Gross Total:{" "}
          <span className={sumTotal > 0 ? "total green" : " total red"}>
            ${sumTotal}
          </span>
        </h1>

        <Logout />
      </Header>

      <Budgetlist>
        <Income
          income={incomes}
          setIncome={setIncome}
          incomeTotal={incomeTotal}
          handleDelete={handleIncomeDelete}
        />
        <Expense
          expense={expenses}
          setExpense={setExpense}
          expenseTotal={expenseTotal}
          handleDelete={handleExpenseDelete}
        />
      </Budgetlist>
    </Div>
  );
};

export default Budget;
