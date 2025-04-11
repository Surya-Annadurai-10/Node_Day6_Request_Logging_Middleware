const express = require("express");
const morgan = require("morgan");

const app = express();

morgan.token("type" , (req) =>{
    return req.headers['content-type']
})

app.get("/post" ,morgan(":method :remote-addr :url :response-time :type"), (req , res) =>{
    res.status(200).json(
        {message : "Posted successfully"}
    )
})

app.get("/" ,morgan(":method :url :remote-addr :date[web]"), (req , res) =>{
    res.status(200).json({
        message : "Message sent successfully"
    })
})

app.listen(8001 , (err) =>{
    if(err){
        console.log("Error while listening to the server");
        
    }else{
        console.log("Staring listening to the server:8001" );
        
    }
})