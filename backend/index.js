import {app } from './src/app.js';
import connectDB from './database/index.js';
import dotenv from 'dotenv';

dotenv.config({
  path: './.env'
});

connectDB().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch((error) => {
    console.log('Error connecting to MongoDB', error);
});
