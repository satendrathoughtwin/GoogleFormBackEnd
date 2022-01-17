import express, { json } from 'express';
import formroutes from './routes/formroutes.js';
import connectDb from './Utils/db.js';
import cors from 'cors'
var app = express();
// app.use("/api",(req,res)=>res.json("llll"))
app.use(express.json())
connectDb()
app.use(cors())
app.use("/api",formroutes)

app.listen(8000,console.log("app is running"))