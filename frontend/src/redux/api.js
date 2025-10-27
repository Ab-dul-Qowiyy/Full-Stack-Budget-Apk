import axios from "axios";

export const baseURL = "https://budget-backend-two.vercel.app/api";

const API = axios.create({ baseURL: baseURL });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const registerUser = (userData) => API.post("/auth/sign-up", userData);

export const loginUser = (userData) => API.post("/auth/sign-in", userData);

export const createIncome = (incomeData) =>
  API.post("/incomes/create", incomeData);

export const getIncomes = () => API.get("/incomes");

export const deleteIncome = (incomeData) =>
  API.delete(`/incomes/delete/${id}`, incomeData);


export const createExpense = (expenseData) =>
  API.post("/expenses/create", expenseData);

export const getExpense = () => API.get("/expenses");

export const deleteExpense = (expenseData) => API.delete(`/expenses/delete/${id}`, expenseData)

