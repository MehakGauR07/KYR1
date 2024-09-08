import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";
import { case2Model } from '../models/case2';  // Import your Mongoose model
// import { case2 } from '../data/case2'; 
import { case3Model } from '../models/case3';
// import { case3 } from '../data/case3';
import bodyParser from 'body-parser';
const axios = require('axios');

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS configuration
app.use(cors({
  origin: '*',  // Allows all origins, adjust this to be more restrictive if needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Log incoming requests
app.use((req: Request, res: Response, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

// Define routes
app.get('/api/options/case1/:category', async (req: Request, res: Response) => {
    try {
      const category = req.params.category;
      const case2Data = await case2Model.findOne({ Category: category });
      res.json(case2Data?.options || []);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/api/options/case2/:article', async (req: Request, res: Response) => {
    const article = req.params.article;
    try {
        const case3Data = await case3Model.findOne({ Category: article });

        if (!case3Data) {
            return res.status(404).json({ message: 'Data not found in case3' });
        }

        return res.status(200).json(case3Data);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch data from case3' });
    }
});

// ----------------------------------------------

const VERIFY_TOKEN = "youaregay";

export const webhookHandler = (req: Request, res: Response) => {
  try {
    // Parse the query params
    const mode = req.query['hub.mode'] as string | undefined;
    const token = req.query['hub.verify_token'] as string | undefined;
    const challenge = req.query['hub.challenge'] as string | undefined;

    // Validate the presence of mode and token
    if (!mode || !token) {
      console.error("Missing mode or token in query parameters");
      return res.status(400).send({ error: 'Bad Request: Missing mode or token' });
    }

    // Validate the token
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      return res.status(200).send(challenge);
    } else {
      console.error('Invalid VERIFY_TOKEN');
      return res.status(403).send({ error: 'Forbidden: Invalid verify token' });
    }
  } catch (error) {
    console.error("Webhook handler error:", error);
    return res.status(500).send({ error: 'Internal Server Error', details: error.message });
  }
};


// ----------------------------------------------

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI as string)
  .then(async () => {
    try {
      // Uncomment the following lines if you want to drop the database and insert data
      // await mongoose.connection.db.dropDatabase();  
      // await case2Model.insertMany(case2);  
      // await case3Model.insertMany(case3);  
      // console.log("Data inserted successfully");
    } catch (error) {
      console.error("Error inserting data:", error);
    }

    // Start the server
    app.listen(7000, () => console.log(`Server Port: 7000`));
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error}`);
  });
