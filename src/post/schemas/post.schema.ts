import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  created_at: { type: Date, default: Date.now },
});
