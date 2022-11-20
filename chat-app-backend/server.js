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
const mongoURI = 'mongodb+srv://admin:335577@cluster0.fw1gdf8.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('DB Connected');
})

// mongodb+srv://admin:335577@cluster0.fw1gdf8.mongodb.net/?retryWrites=true&w=majority

// Add API Routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

// Create listening ports
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
