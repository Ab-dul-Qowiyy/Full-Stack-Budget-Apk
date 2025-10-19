import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { createExpenses } from "../../redux/action/expenseAction";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 0.8rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  button {
    background-color: rgb(143, 98, 202);
    border-radius: 0.4rem;
    border: 1px solid rgb(143, 98, 202);
    margin-top: 0.7rem;
    font: inherit;
    padding: 0.3rem;
    color: rgb(255, 255, 255);
    cursor: pointer;
  }

  button:hover,
  button:active {
    background-color: rgb(124, 66, 199);
  }

  input {
    border-radius: 0.4rem;
    border: 1px solid rgba(197, 157, 250, 0.5);
    padding: 0.3rem;
    margin: 0.7rem 0;
  }

  input:focus {
    border-color: rgb(174, 120, 245);
    outline: none;
  }
`;

const ExpenseForm = ({ setExpense, expense }) => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExpenses = {
      item,
      amount: Number(amount),
    };

    // const { data } = await axios.post(
    //   "http://localhost:5000/api/expenses/create/",
    //   newExpenses
    // );
    // console.log(data);
    // setExpense([...expense, data.data]);

    dispatch(createExpenses(newExpenses));
    console.log(newExpenses);

    setItem("");
    setAmount("");
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>

        <input
          type="text"
          placeholder="Enter your items"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <label htmlFor="amount">Amount</label>

        <input
          type="text"
          placeholder="enter the amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button type="submit">enter</button>
      </Form>
    </Wrapper>
  );
};

export default ExpenseForm;
