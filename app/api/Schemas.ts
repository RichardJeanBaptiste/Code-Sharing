import mongoose from "mongoose";

const CodeSchema = new mongoose.Schema({
    id: String,
    code: String,
    newCode: Boolean
})

export const codeSnippet = mongoose.models.codeSnippet || mongoose.model("codeSnippet", CodeSchema, "codeSnippet");