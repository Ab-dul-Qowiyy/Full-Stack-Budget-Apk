import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Budget from "./pages/budget/Budget";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const Container = styled.div`
  /* background-color: rgba(255, 255, 255, 0.932); */
  width: 100%;
  max-width: 80%;
  height: 100%;
  margin: 2% auto;
  padding: 1.5rem;
  animation: appear 1s ease-in forwards;
  /* padding-right: 15%; */

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

  @media(max-width: 500px){
    margin-right: 90%;
  }

`;

const App = () => {
  const user = localStorage.getItem("user");
  return (
    <Container>
      <BrowserRouter>
        {/* <Routes>
          {user ? (
            <Route path="/" element={<Budget />} />
          ) : (
            <>
              <Route path="/auth/user/register" element={<Register />} />
              <Route path="/auth/user/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/auth/user/login" />} />
            </>
          )}
        </Routes> */}

        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Budget />
              </ProtectedRoute>
            }
          />
          <Route path="/auth/user/register" element={<Register />} />
          <Route path="/auth/user/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/auth/user/login" />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Container>
  );
};

export default App;
