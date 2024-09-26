import { Router } from "express";
import { check } from "express-validator";
import { login } from "../controller/auth";

const router = Router();

router.post("/login", [check("email", "el correo es obligatorio")], login);

export default router;
