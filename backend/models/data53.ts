import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  value: { type: String, required: true },
  index : { type: Number, required: true }
});

const data53Schema = new mongoose.Schema({
  Category: { type: String, required: true },
  options: { type: [optionSchema], required: true },
});

export const data53Model = mongoose.model('data53', data53Schema);