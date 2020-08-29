import { Document } from 'mongoose';

export interface Post extends Document {
    readonly tile: string;
    readonly text: string;
    readonly created_at: Date;
}