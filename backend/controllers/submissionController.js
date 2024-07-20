const Submission = require('../models/submissionModel');

const getSubmissionsByProblemId = async (req, res) => {
  try {
    const submissions = await Submission.find({ problemId: req.params.problemId });
    if (!submissions) {
      return res.status(404).json({ error: "No submissions found for this problem" });
    }
    res.json({ submissions });
  } catch (error) {
    console.log("Error finding submissions by problem ID", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const createSubmission = async (req, res) => {
  try {
    const submission = new Submission({
      userId: req.user._id,
      problemId: req.body.problemId,
      submission: req.body.submission,
      status: req.body.status,
    });
    await submission.save();
    res.status(201).json(submission);
  } catch (error) {
    console.log("Error creating submission", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getSubmissionsByProblemId, createSubmission };
