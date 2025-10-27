import { Router } from "express";
import authControllers from "../controllers/authControllers.js";
import auth from "../middleware/auth.js";

const authRouter = Router();

authRouter.post("/sign-up", authControllers.signUp);
authRouter.post("/sign-in", authControllers.signIn);
authRouter.post("/logout", authControllers.logout);
authRouter.get("/user-profile/:id", auth, authControllers.getUserProfile);

export default authRouter;
