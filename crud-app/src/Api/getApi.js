const Responses = require('./api_response');
const {dataBase_Connection} = require('./connection');
const empModel = require('../Model/empModel');

const GetApi = async(req,res)=>{
    try{
        dataBase_Connection();
        const data = await empModel.find({});
        return Responses._success({FetchedData:data,message:'!!!!Data Fetched Successfuly!!!!'});
    }catch(e){
        return Responses._failure({message:`Error Coming :::::: ${e}`});
    }
}

module.exports = {GetApi};