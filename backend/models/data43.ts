import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  value: { type: String, required: true },
  index : { type: Number, required: true }
});

const data43Schema = new mongoose.Schema({
  Category: { type: String, required: true },
  options: { type: [optionSchema], required: true },
});

export const data43Model = mongoose.model('data43', data43Schema);