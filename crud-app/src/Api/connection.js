const mongoose = require('mongoose');

const dbPath = 'mongodb://localhost:27017/Employee';

const dataBase_Connection = ()=>{
    try{
        mongoose.connect(dbPath,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=>{
            console.log('DataBase Connection Success >>>>>>>>>>>>>');
        })
    }catch(e){
        console.log('DataBase Connection Failed >>>>>>>>>>>>>',e);
    }
}

module.exports = {dataBase_Connection};