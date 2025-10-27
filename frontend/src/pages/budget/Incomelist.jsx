import React from 'react'
import styled from "styled-components"
import axios from 'axios'


const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1.1rem;
  border-radius: 0.8rem;
  margin-bottom: 0.8rem;
  border-right: 6px solid rgb(90, 219, 90);
`;

const P = styled.p`
  flex: 1;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  white-space: nowrap;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Del = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  font: inherit;
  border: none;
  cursor: pointer;
  background-color: rgb(255, 91, 91);
  padding: 1;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 0.3rem;

  :hover {
    background-color: rgb(255, 62, 62);
  }
`;



const Incomelist = ({income, handleDelete}) => {



  return (
    <Ul>
      <P className='item'>{income.item}</P>
      
      <p>${income.amount}</p>
      <Del type='button' onClick={()=>handleDelete(income._id)}>del</Del>
    </Ul>
  );
}

export default Incomelist
