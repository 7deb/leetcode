const Submission = require('../models/submissionModel');
const User = require('../models/userModel');

const createSubmission = async (req, res) => {
  try {
    const isCorrect = Math.random() > 0.5 ? 'correct' : 'wrong';
    

    const submission = new Submission({
      userId: req.user._id,
      problemId: req.body.problemId,
      submission: req.body.submission,
      status: isCorrect,
    });

    await submission.save();
    let user;

    if (isCorrect === "correct") {
      const user = await User.findById(req.user._id);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const lastSubmissionDate = user.lastSubmissionDate ? new Date(user.lastSubmissionDate) : new Date(0);
      lastSubmissionDate.setHours(0, 0, 0, 0);

      if (today > lastSubmissionDate) {

        user.streak += 1;
        user.lastSubmissionDate = new Date();

        if (user.streak >= 3) {
          user.tokens += 3;
          user.streak = 0; 
        } else {
          user.tokens += 1;
        }
        if (user.tokens >= 3) {
          user.redeemCoins += Math.floor(user.tokens / 3);
          user.tokens = user.tokens % 3;
        }
        await user.save();
      }
    }
    res.status(201).json(submission);
    if(user){
      console.log(`reedem coins: ${user.redeemCoins} token: ${user.tokens} streak: ${user.streak}`);
    }
  }
  catch (error) {
    console.log("Error creating submission", error);
    if (!res.headersSent) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
}
const getuserDetails = async (req,res)=>{
  try{
    const user = await User.findById(req.user._id,'username email streak tokens redeemCoins lastSubmissionDate');
    if(!user){
      return res.status(404).json({error:"user does not exist"});
    }
    res.json({user})
  }catch(error){
    console.log(error.message);
    return res.status(500).json({message:"internal server error"});
  }
}
const getSubmissionsByProblemId = async (req, res) => {
  try {
    const submissions = await Submission.find({ problemId: req.params.problemId });
    if (!submissions) {
      return res.status(404).json({ error: "No submissions found for this problem" });
    }
    res.json({ submissions });
  } catch (error) {
    console.log("Error finding submissions by problem ID", error);
    return res.status(500).json({error});
  }
};

module.exports = { getSubmissionsByProblemId, createSubmission, getuserDetails};