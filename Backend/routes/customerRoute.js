import express from "express";
import { registerCustomer, loginCustomer } from "../controller/CustomerController.js";

const router = express.Router();

// Customer Registration
router.post("/register", registerCustomer);

// Customer Login
router.post("/login", loginCustomer);

export default router;