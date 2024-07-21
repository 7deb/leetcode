const problem = require('../model/problemModel');

const createProblem = async (req,res)=>{
    try{
        const {title,description,difficulty} = req.body;

        if(!title || !description || !difficulty){
            return res.status(400).json({error:"all fields are required"})
        }

        const newProblem = await problem.create({
            title,
            description,
            difficulty,
        })

        return res.status(201).json(newProblem);
    }catch(error){
        console.log("error in creating problem",error.message);
        return res.status(500).json({error:"server error"});
    }
}

const getProblems = async (req, res) => {
    try {
        const problems = await problem.find();
        res.status(200).json(problems);
    } catch (error) {
        console.log("Error getting problems:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {createProblem,getProblems};