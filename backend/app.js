const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./management/config/database");

mongoose.connect(config.database);
mongoose.connection.on("connected", () => {
    console.log("Mongoose connected");    
});
mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error:" + err);    
});

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json()); 

//routes
const userRoutes = require('./management/routes/user-routes'); 
const machineRoutes = require('./management/routes/machine-routes'); 
app.use('/api/users', userRoutes);
app.use('/api/machines', machineRoutes);


app.get("/", (req, res) => {
    res.send("Invalid Endpoint.");
});


app.listen(port, ()=>{
    console.log("Server started on port:" + port);
});
