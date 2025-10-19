import React, { useState } from "react";
import styled from "styled-components"
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/action/authActions";

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

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const { firstname, lastname, email, password } = userData;

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Textarea>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={handleChange}
        />
      </Textarea>
      <Textarea>
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={handleChange}
        />
      </Textarea>
      <Textarea>
        <label htmlFor="">Email</label>
        <input type="text" name="email" value={email} onChange={handleChange} />
      </Textarea>
      <Textarea>
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Textarea>
      <button>Register</button>
      <a href="/auth/user/login">Already have an account?</a>
    </Form>
  );
};

export default RegisterForm;
