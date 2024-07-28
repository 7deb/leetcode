const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    problemId: { type: mongoose.Schema.Types.ObjectId, ref: "Problem", required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Discussion" }],
}, {
    timestamps: true
});

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
