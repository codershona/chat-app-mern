import Pusher from 'pusher';
import cors from 'cors';
//  Import Dependencies
import express from 'express';
import mongoose from 'mongoose';

// App Configuration
const app = express();
const port = process.env.PORT || 9001;


// Create Middlewares


// Database Configuration


// Add API Routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

// Create listening ports
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
