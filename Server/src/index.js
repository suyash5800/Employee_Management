import express from 'express';
import cors from 'cors';
import authRoutes  from "../routes/auth.js";
import connetToDatabase from "../dataBase/db.js";

connetToDatabase();
const PORT = 5800;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static('uploads'))
app.use("/api/auth", authRoutes);

app.listen(PORT,()=>{
    console.log(`server is running bro on => PORT:${PORT} `)
    console.log(PORT)
})