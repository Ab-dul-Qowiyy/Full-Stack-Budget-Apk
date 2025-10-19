import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { loginUser } from "../redux/action/authActions";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
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

  a {
    /* font-size: 11px; */
    margin-top: 2%;
    margin-left: 2%;
  }

  @media (max-width: 390px) {
    /* input{
      width: 200px;
    } */
    /* font-size: 15px; */

    a {
      font-size: 11px;
      margin-top: 2%;
      margin-left: 2%;
    }
  }
`;

const Textarea = styled.div`
  display: flex;
  flex-direction: column;

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

  @media (max-width: 390px) {
    /* input{
      width: 200px;
    } */
      font-size: 15px;


    }
  
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Textarea>
        <label htmlFor="">Email</label>
        <input type="text" name="email" value={email} onChange={handleChange} placeholder="Email Address" />
      </Textarea>
      <Textarea>
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter Your Password"
        />
      </Textarea>
      <button>Login</button>
      <a href="/auth/user/register">Don't have an account?</a>
    </Form>
  );
};

export default LoginForm;
