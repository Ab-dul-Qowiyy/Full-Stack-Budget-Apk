import express from 'express'
import incomesControllers from '../controllers/incomesController.js'
import auth from '../middleware/auth.js'

const incomeRouter = express.Router()

incomeRouter.get("/", incomesControllers.getallIncomes);
incomeRouter.post("/create", auth, incomesControllers.createIncome);
incomeRouter.delete("/delete/:incomeId", auth, incomesControllers.deleteIncome);


export default incomeRouter;