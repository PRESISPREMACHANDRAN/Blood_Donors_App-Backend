const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { donorModel } = require("./Model/DonorModel");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(
  "mongodb+srv://presi123:presi123@cluster0.dfo33ti.mongodb.net/BloodDonorDB?retryWrites=true&w=majority"
);




//ADD DONOR
app.post("/add",async(req,res)=>{
  var data=req.body
  let donor = new donorModel(data);
  let result = await donor.save();
res.json({"status":"success","data":result})
})

// viewAll
app.post("/viewAll", async(req, res) => {
  let result=await donorModel.find()
  res.json({ status: "success", data: result });
});


// search donors
app.post("/search",async(req,res)=>{
var data=req.body
let result=await donorModel.find(data)
res.json({"status":"success","data":result})
})

app.listen(4000, () => {
  console.log("server starts running.....");
});