import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import connectDb from "./utils/db.js";
import userRoute from "./routes/userRoute.js";
import companyRoute from "./routes/companyRoutes.js";
import jobRoute from "./routes/jobRoute.js";
import applicationRoutes from "./routes/applicationRoutes.js"
import cloudinary from 'cloudinary';

const PORT = 5000;



dotenv.config({}); 

// Cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });



connectDb();

const app = express();




//middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true // Correct spelling
};



app.use(cors(corsOptions));

//api's

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/app", applicationRoutes);









app.listen(PORT , ()=>{
    console.log(`Server running at port ${PORT}`);
    
})