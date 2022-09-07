const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const app = express();

const router = require('./routes/book-routes');

mongoose.connect("mongodb+srv://atlasAdmin:wCdfP2KhdWDTyZNJ@cluster0.ojzasvm.mongodb.net/bookStore?retryWrites=true&w=majority").then(()=>{
    console.log("db connected");
}).then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));
// mongoose.connect("mongodb+srv://admin:LtiDKt9prjcGikwA@cluster0.ojzasvm.mongodb.net/bookStore?retryWrites=true&w=majority").then(()=>{
//     console.log("db connected");
// }).then(()=>{
//     app.listen(5000);
// }).catch((err)=>console.log(err));

app.use(cors());
app.use(express.json())

app.use('/books',router);

console.log("app js");

//db password: LtiDKt9prjcGikwA

// wCdfP2KhdWDTyZNJ