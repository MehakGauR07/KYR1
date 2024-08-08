import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  value: { type: String, required: true },
  index : { type: Number, required: true }
});

const case3Schema = new mongoose.Schema({
  Category: { type: String, required: true },
  options: { type: [optionSchema], required: true },
});

export const case3Model = mongoose.model('Case3', case3Schema);