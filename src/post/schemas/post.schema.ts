import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
    title: String,
    text: String,
    created_at: { type: Date, default: Date.now }
})