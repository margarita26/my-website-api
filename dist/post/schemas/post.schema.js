"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = void 0;
const mongoose = require("mongoose");
exports.PostSchema = new mongoose.Schema({
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
//# sourceMappingURL=post.schema.js.map