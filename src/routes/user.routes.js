import { Router } from "express";
import { getUser } from "../controllers/user.controllers";

const router = Router();

router.get("/api/users/:userId", getUser);

export default router;
