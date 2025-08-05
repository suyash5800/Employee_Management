import express from "express";
import { login,signup , verify} from "../controller/authController.js";
import authmiddleware from '../middleware/authmiddleware.js'



const router = express.Router();
router.post("/login", login);
router.post("/signup", signup);
router.post("/verify", authmiddleware,verify);

export default  router ;