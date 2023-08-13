import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose";
import {userModel} from "./models/UserModel.js"
import {cardModel} from "./models/CardModel.js"
import {deckModel} from "./models/DeckModel.js"
import {DeckRouter} from "./routes/DeckRoute.js";


dotenv.config()
const app =express()
app.use(express.json())
app.use(cors())
app.use("/deck",DeckRouter)

mongoose.connect("mongodb+srv://"+process.env.MONG_USER+":"+process.env.MONG_PWD+"@mobile.pzlgsd4.mongodb.net/?retryWrites=true&w=majority")
    .then(r =>console.log("db connected")).catch(e=>console.log("DB not connected check IP"))
app.listen(3001,()=> console.log("SERVER STARTED"))
