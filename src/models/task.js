const mongoose = require("mongoose");

//EXPLICIT SCHEMA SO THAT WE CAN ADD OPTIONS LIKE TIMESTAMP.

const taskSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            trim: true,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model("Task", taskSchema);

// ref gives a relationship to the other model User

module.exports = Task;
