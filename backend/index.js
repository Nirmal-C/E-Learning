const express = require('express');
const Mongoclient = require('mongodb').MongoClient;
const cors = require ('cors');
const multer=require('multer');



 const app = express();
 app.use(cors());
 

var CONNECTION_STRING="mongodb+srv://elearning:ForWFH%40nc0102@e-learning.9ceylov.mongodb.net/?retryWrites=true&w=majority"



var DATABASENAME="E-Learning";
var database;


 app.listen(3001,()=>{
    Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
        database=client.bd(DATABASENAME)
        console.log("Server is running")
    })
  
 })


 
