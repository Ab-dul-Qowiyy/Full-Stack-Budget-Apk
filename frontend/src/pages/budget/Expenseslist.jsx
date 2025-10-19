import React from 'react'
import styled from 'styled-components'


const ExpenseList = styled.div`
  animation: appear 0.3s ease-in forwards;

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1.1rem;
  border-radius: 0.8rem;
  margin-bottom: 0.8rem;
  border-right: 6px solid rgb(255, 91, 91);
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
  padding: 0;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 0.3rem;

  :hover {
    background-color: rgb(255, 62, 62);
  }
`;



const Expenseslist = ({ expense, handleDelete }) => {
  return (
    <ExpenseList>
      <Ul>
        <P><b>{expense.item}</b></P>
        
        <p>-${expense.amount}</p>
        <Del type="button" onClick={() => handleDelete(expense._id)}>
          del
        </Del>
      </Ul>
    </ExpenseList>
  );
};

export default Expenseslist;
