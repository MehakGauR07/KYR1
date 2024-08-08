import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from "mongoose";
import { case2Model } from '../models/case2';  // Import your Mongoose model
import { case2 } from '../data/case2';  // Import your case2 data

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI as string)
  .then(async () => {
    try {
    //   await mongoose.connection.db.dropDatabase(); ---- doesnt work

      // await case2Model.insertMany(case2);  
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
