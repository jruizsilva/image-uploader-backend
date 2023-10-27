import { Router } from "express";
import imageController from "../controllers/image.controllers";

const router = Router();

router.post("/api/images", imageController.uploadImage);

export default router;
