import {Router} from 'express'
import authControllers from '../controllers/authControllers.js';

const authRouter = Router();

authRouter.post("/sign-up", authControllers.signUp);
authRouter.post("/sign-in", authControllers.signIn);
authRouter.post("/logout", authControllers.logout);



export default authRouter; 