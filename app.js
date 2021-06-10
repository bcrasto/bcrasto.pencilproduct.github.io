const express = require("express");
const request = require("request")
const bodyParser = require("body-parser")
const https = require("https")

const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html")
})

app.post("/", function(req,res){

})

app.post("/failure", function(req,res){

})


app.listen(process.env.PORT || 3000, function(){
  console.log("server is running on port 3000")


})
