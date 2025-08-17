import express from "express";



import { login ,signup,verify } from "../controller/authController.js";
import {GetEmp ,getupdateemployee} from "../controller/employeecontroller.js";


import{ departreg, getDepartments, updateDepartment,deleteDepartment} from "../controller/departmentController.js";
import authmiddleware from '../middleware/authmiddleware.js'
import upload from "../middleware/upload.js";



const router = express.Router();
router.post("/login", login);
router.post("/signup",upload.single('profileimage'), signup);
router.post("/verify", authmiddleware, verify);



router.post("/department", departreg);
router.get("/department", getDepartments);
router.put("/department/:id", updateDepartment);
router.delete("/department/:id", deleteDepartment);


router.get("/employee",GetEmp);
router.put("/employee",getupdateemployee);



export default router;