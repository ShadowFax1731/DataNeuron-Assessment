import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  next();
});

// Middleware for parsing request body
app.use(express.json());

// Allow all origins
app.use(cors());
// Allow specific origin(s)
app.use(cors({
  origin: 'https://data-neuron-assessment.vercel.app/',
  credentials: true
}));

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome!');
});

app.use('/books', booksRoute);

//connect to the mongoDB Databasae
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
