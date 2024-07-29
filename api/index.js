import express from 'express';

import mongoose from 'mongoose';

import dotenv from 'dotenv';
import { error } from 'console';
dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('Connect to MongoDB');
}).catch((err) => {
    console.log(err);
});



const app = express();

app.listen(3000, () => {
    
}
);