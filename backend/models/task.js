import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.ObjectId, ref: "user"},
    name: String,
    description: String,
    imageUrl: String,
    taskStatus: String,
    registerDate: {type: Date, default: Date.now}
});

const task = mongoose.model("tasks", taskSchema);
export default task;