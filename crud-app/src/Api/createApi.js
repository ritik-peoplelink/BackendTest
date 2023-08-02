const mongoose = require('mongoose');
const Responses = require('./api_response');
const {dataBase_Connection} = require('./connection');
const empModel = require('../Model/empModel');

const CreateApi = async(req,res)=>{
    try{
        dataBase_Connection();
        const data = new empModel(JSON.parse(req.body));
            await data.save();
            return Responses._success({InsertedData:JSON.parse(req.body),message:'!!!!Data Inserted Successfuly!!!!'});
    }catch(e){
        return Responses._failure({message:`Error Coming :::::: ${e}`});
    }
}

module.exports = {CreateApi};