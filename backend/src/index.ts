import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";
import { case2Model } from '../models/case2';  // Import your Mongoose model
import { case2 } from '../data/case2';  // Import your case2 data
import { case3Model } from '../models/case3';
import { case3 } from '../data/case3';
import bodyParser from 'body-parser';
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors( { origin: '*' }));
app.use(bodyParser.json());

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
        // Find the corresponding data in case3 based on the answer
        const case3Data = await case3Model.findOne({ Category: article });

        if (!case3Data) {
            return res.status(404).json({ message: 'Data not found in case3' });
        }

        return res.status(200).json(case3Data);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to fetch data from case3' });
    }
});

app.post('/chat', async (req, res) => {
  try {
      const response = await axios.post('http://localhost:5005/webhooks/rest/webhook', {
          sender: 'user',
          message: req.body.message
      });
      res.json(response.data);
  } catch (error) {
      res.status(500).send(error);
  }
});

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI as string)
  .then(async () => {
    try {
    //   await mongoose.connection.db.dropDatabase(); ---- doesnt work

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
