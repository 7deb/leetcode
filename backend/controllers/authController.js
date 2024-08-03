const bcrypt = require('bcrypt');
const user = require('../models/userModel');
const generateToken = require('../utility/utility');

const signup = async (req, res) => {
    try {
        // taking user details
        const { username, email, password, confirmedPassword } = req.body;

        // checking if all fields are filled 
        if (!username || !email || !password || !confirmedPassword) {
            return res.status(401).json({ error: "all fields are required!!" });
        }

        if (password !== confirmedPassword) {
            return res.status(401).json({ error: "Passwords do not match!" });
        }

        // checking if user already exists 
        const existingUser = await user.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // hashing the passwords
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creating the user data 
        const newUser = await user.create({
            username,
            email,
            password: hashedPassword,
        });

        // creating the user in the database
        if (newUser) {
            generateToken(newUser._id, res);
            return res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        console.log("error message:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const login = async (req, res) => {
    try {
        const { emailOrUsername, password } = req.body;

        // Validate input
        if (!emailOrUsername || !password) {
            return res.status(400).json({ error: "All fields are required!" });
        }

        // Determine if input is an email
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailOrUsername);
        
        // Find user by email or username
        let userQuery = isEmail ? { email: emailOrUsername } : { username: emailOrUsername };
        const existingUser = await user.findOne(userQuery);

        const comparePassword = await bcrypt.compare(password,existingUser.password);
        if(!comparePassword){
            return res.status(400).json({error:"passwords do not match!!"});
        }

        generateToken(existingUser._id,res);
        return res.status(201).json({
            _id: existingUser._id,
            username: existingUser.username,
        })
    }catch(error){
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

}
module.exports = {signup,login,logout};