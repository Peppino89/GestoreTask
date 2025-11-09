import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from "morgan";
import tasksAPI from "./routes/tasksAPI.js";
import {errorHandler} from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));// formato "dev" mostra metodo, rotta, tempo, stato


app.use('/api',tasksAPI);
app.use(errorHandler);



//Connessione al DB
mongoose.connect(process.env.MONGO_URI, {dbName: "TasksDB"})
    .then(() => {console.log("Connected as MongoDB...!")})
    .catch(err => console.log("Errore connessione a TasksDB: "+err));



app.listen(port, () => {
    console.log(` Server started on port ${port}`);
});