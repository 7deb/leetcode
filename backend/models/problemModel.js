const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },difficulty:{
        type: String,
        required: true 
    },acceptance: { 
        type: String,
        required: true 
    },description: { 
        type: String, 
        required: true 
    },exampleIn: { 
        type: String, 
        required: true 
    },
    exampleOut: { 
        type: String, 
        required: true
    },
  }, { timestamps: true });

  const Problem = new mongoose.model('Problem',problemSchema);

  module.exports = Problem;