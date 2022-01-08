const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    projectAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    finished: {
        type: Boolean,
        default: false,
    },
    wordCount: {
        type: Number,
        default: 0,
    },

});

const Project = model("Project", projectSchema);

module.exports = Project;
