// models/case2.ts
import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema({
  value: { type: String, required: true },
  answer: {type: String, required: true},
  index : { type: Number, required: true }
});

const case2Schema = new mongoose.Schema({
  Category: { type: String, required: true },
  options: { type: [optionSchema], required: true },
});

export const case2Model = mongoose.model('Case2', case2Schema);
