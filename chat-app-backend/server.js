import Messages from './chatModel.js';
import Pusher from 'pusher';
import cors from 'cors';
//  Import Dependencies
import express from 'express';
import mongoose from 'mongoose';
// App Configuration
const app = express();
const port = process.env.PORT || 9000;


// Create Middlewares
app.use(express.json());
app.use(cors());

// Database Configuration
const mongoURI = 'mongodb+srv://chatappadmin:m6l4B3dK4ZlbRyPa@cluster0.fw1gdf8.mongodb.net/ichatDB?retryWrites=true&w=majority'
mongoose.connect(mongoURI, { // MongoClient.connect(mongoURI, {})
  useNewurlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
  // useFindAndModify: true
  // serverApi: ServerApiVersion.v1,
});
mongoose.connection.once('open', () => {
  console.log('DB Connected');
});

// Add API Routes
app.get('/', (req, res) => res.status(200).send('Hello ChatApp Backend World'));

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body
  console.log(dbMessage);
  Messages.create(dbMessage, (err, data) => {
      if (err) {
          res.status(500).send(err);
          console.log(err)
      } else {
          // res.status(201).send(`new messages created: \n ${data}`)
          res.status(201).send(data);
      }
  });
});

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
        if (err) {
          res.status(500).send(err);
          console.log(err)
      } else {
          res.status(200).send(data);
      }
    });
});

// Create listening ports
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
