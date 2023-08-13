const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    activityName: {
        type: String,
        min: [3, 'El nombre del proyecto debe tener al menos 3 caracteres'],
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Backlog', 'In Progress', 'Completed'],
        required: true
    },

});

const activityLog = mongoose.model("activityLog", activitySchema);

module.exports = activityLog;