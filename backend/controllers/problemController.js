const Problem = require('../models/ProblemModel');

const getProblem = async (req,res)=>{
    try {
        const problems = await Problem.find().select('title difficulty acceptance');
        res.json({problems});
    } catch (error) {
        console.log("error finding all the problems",error);
        return res.status(500).json({error:"internal server error"});
    }
}

const getProblemById = async (req,res)=>{
    const problem = await Problem.findById(req.params.id);
    if(!problem){
        return res.status(404).json({error:"problem not found"});
    }
    res.json({problem});
}
const createProblem = async (req, res) => {
    const problem = new Problem(req.body);
    await problem.save();
    res.status(201).json(problem);
};

module.exports = {createProblem,getProblem,getProblemById}