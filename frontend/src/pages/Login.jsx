import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 20rem;
  border-radius: 2rem;
  background-color: transparent;
  /* background-color: #fdfdfd; */
  box-shadow: 0 0.1rem 0.5rem;
  /* align-self: center; */
  color: white;
  padding: 5%;
  margin: 0 auto;

  flex-wrap: wrap;

  @media (max-width: 390px) {
    /* input {
      min-width: 200px;
    } */

    width: 200px;
    /* margin: 0 auto;
    align-self: center; */

    p{
      font-size: 12px ;
    }

  }
`;

const H2 = styled.h2`
  font-family: "Segoe UI", Impact, Haettenschweiler, "Arial Narrow Bold",
    sans-serif;
  /* font-size: 35px; */
  /* margin-top: 4rem;
  margin-bottom: 2rem; */
  text-align: center;

  @media (max-width: 390px) {
    /* input {
      min-width: 200px;
    } */

    /* width: 200px; */
    font-size: 15px;
    padding: 2px;
  }
`;

const Login = () => {
  return (
    <Div>
      <div>
        <H2>Welcome Back</H2>
        <p>Please sign in to continue your journey</p>
      </div>

      <LoginForm />
    </Div>
  );
};

export default Login;
