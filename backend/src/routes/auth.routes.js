import { Router } from "express";

const router = Router();

router.post("/register");
router.post("/login");
router.post("/logout");
router.get("/check");

export default router;
