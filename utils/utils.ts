import * as json from 'load-json-file'
var winston = require('winston');

module.exports = async function readDataFromJason(){
    await json("./step_definitions/dataFile").then((data) =>{
        //console.log(data);
        //winston.info(data);
        return data;
    });
}