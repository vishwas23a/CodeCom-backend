import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './router/codeAuth.js'
import userRoute from './router/userRoute.js'
import { connectDb } from './db/connectDb.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
dotenv.config();
const port = process.env.PORT

const corsOptions = {
    origin: 'http://localhost:5173',  // Replace with your frontend URL
    credentials: true,  // Allow cookies to be sent
  };
const app = express();
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended:true}))


app.use('/api/auth',authRoutes);
app.use('/api/user',userRoute)

app.listen(port,()=>{
    connectDb()
    console.log("server is live");
    
})