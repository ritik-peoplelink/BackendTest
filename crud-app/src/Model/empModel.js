const mongoose = require('mongoose');
const empSchema = new mongoose.Schema({
    empName : String,
    empAge : Number,
    empEmail : String
},{collection:"empData"});

const empModel = mongoose.model("empData",empSchema);
module.exports = empModel;