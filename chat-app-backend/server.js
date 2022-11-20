import Pusher from 'pusher';
import cors from 'cors';
//  Import Dependencies
import express from 'express';
import mongoMessages from './chatModel.js';
import mongoose from 'mongoose';
// App Configuration
const app = express();
const port = process.env.PORT || 9001;


// Create Middlewares
app.use(express.json());
app.use(cors());

// Database Configuration
const mongoURI = 'mongodb+srv://admin:abcdef@cluster0.fw1gdf8.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
  console.log('DB Connected');
});


// mongodb+srv://admin:335577@cluster0.fw1gdf8.mongodb.net/?retryWrites=true&w=majority

// Add API Routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/save/message', (req, res) => {
  const dbMessage = req.body
  console.log(dbMessage);
  mongoMessages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
});

// Create listening ports
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
