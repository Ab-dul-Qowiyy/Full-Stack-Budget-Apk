import React from 'react'
import {useNavigate} from 'react-router-dom' 
import styled from "styled-components";
import { BsBoxArrowRight } from "react-icons/bs";

const LogOut = styled.button`
  font-size: 40px;
  color: rgb(124, 66, 199);
  background-color: transparent;
`;

const Logout = () => {
    const navigate =useNavigate();
    const handleLogout =async()=>{
   

        await fetch("http://localhost:5000/api/auth/logout", {
          method: "POST",
          credentials: "include",
        });
     localStorage.removeItem("token")

        sessionStorage.removeItem("userSession");

        navigate("/auth/user/login");
    }
  return (
    <LogOut onClick={handleLogout}>
      <BsBoxArrowRight />
    </LogOut>
  );
}

export default Logout
