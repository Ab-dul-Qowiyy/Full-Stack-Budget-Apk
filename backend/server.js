import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import incomeRouter from "./route/incomesRoute.js";
import expenseRouter from "./route/expensesRoute.js";
import authRouter from "./route/authRoutes.js";

// INITIALIZING THE APP
const app = express();

//CALLING THE DATABASE
connectDB()

//MIDDLEWARES
app.use(express.json());

const allowedOrigins =["https://full-stack-budget-apk.vercel.app",]
app.use(cors({
  origin: function(origin, callback){
    if(!origin)return callback(null,true);
    if(allowedOrigins.includes(origin))
      return callback(null, true);
    return callback(new Error("Not allowd by CORS"));
  },
  methods:["GET", "POST", "PUT","DELETE"],
  credentials: true,
}));

//GET REQUEST
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to budget app" });
});

app.use('/api/incomes', incomeRouter);
app.use('/api/expenses', expenseRouter )
app.use('/api/auth', authRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
    console.log(`Server running on port: ${PORT}`)
);
