import React from 'react'
import {useNavigate} from 'react-router-dom' 
import styled from "styled-components";
import { BsBoxArrowRight } from "react-icons/bs";

const LogOut = styled.button`
  font-size: 40px;
  color: rgb(124, 66, 199);
  background-color: transparent;

  @media (max-width: 500px) {
    
    
      margin-left: 90%;
      font-size: 22px;
      
    
  }
`;

const Logout = () => {
    const navigate =useNavigate();
    const handleLogout =async()=>{
   

        await fetch("https://budget-backend-two.vercel.app/api/auth/logout", {
          method: "POST",
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
