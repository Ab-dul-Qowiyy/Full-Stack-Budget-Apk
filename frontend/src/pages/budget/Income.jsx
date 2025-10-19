import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIncomes } from "../../redux/action/incomeAction";
import Incomelist from "./Incomelist";
import IncomeForm from "./IncomeForm";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  /* position: relative;

  height: 50vh;
  /* .class {
    margin-top: 120px;
    position: relative;
  } */


`;

const IncomeSpace = styled.div`
  /* padding: 20px; */
`;
const Value = styled.span`
  color: lime;
`;

const Income = ({ income, setIncome, incomeTotal, handleDelete }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getIncomes());
  // }, []);

  return (
    <Div>
      <IncomeSpace>
        <IncomeForm setIncome={setIncome} income={income} />
        <h1>Income List</h1>
        {income.map((income) => (
          <Incomelist
            key={income._id}
            income={income}
            handleDelete={handleDelete}
          />
        ))}
        <div>
          <h1>
            Total: <Value>$ {incomeTotal}</Value>
          </h1>
        </div>
      </IncomeSpace>


    </Div>
  );
};

export default Income;
