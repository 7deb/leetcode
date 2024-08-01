const Discussion = require('../models/discussionModel');
const User = require('../models/userModel'); // Ensure this is correct

const createDiscussion = async (req, res) => {
  try {
    const discussion = new Discussion({
      userId: req.user._id,
      problemId: req.body.problemId,
      content: req.body.content
    });

    await discussion.save();
    res.status(201).json(discussion);
  } catch (error) {
    console.log("Error creating discussion:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getDiscussion = async (req, res) => {
  try {
    const discussions = await Discussion.find({ problemId: req.params.problemId })
      .populate('userId', 'username')
      .populate('replies');
    return res.status(200).json(discussions);
  } catch (error) {
    console.log("Error getting discussion:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const addReply = async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.discussionId);
    if (!discussion) {
      return res.status(404).json({ message: "Discussion not found" });
    }

    const reply = new Discussion({
      userId: req.user._id,
      problemId: discussion.problemId,
      content: req.body.content
    });

    await reply.save();

    discussion.replies.push(reply);
    await discussion.save();

    return res.status(201).json(reply);
  } catch (error) {
    console.log("Error adding reply:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addReply, getDiscussion, createDiscussion };
