const express=require("express")
const bodyparser=require("body-parser")

// import userRouts from'./routes/users.js'

const app=express()
const path = require('path');
const port=5000

 app.use(bodyparser.json());

app.get("/",(req,res)=> {
    console.log("GET REQUEST FROM HOME PAGE")
    res.send("hello from BACKEND HOMEPAGE home page")
})  
app.get("/",(req,res)=>{
    res.send("hello from home page")
})
app.use(bodyparser.json())

app.get("/api/v1",(req,res)=>{
    res.json(
        {
            message:"hello from the api version"
        }
    )
}
)

  
app.get("/api/v1",(req,res)=>{
    console.log("IN THE API ROUTE")
    res.json(
    
        {
            message:"hello from the api version"
        }
    )
}
)

app.get("/image", (req, res) => {
    const imagePath = path.join(__dirname, 'anonymous-hacker-with-programming-codes-nm4l9azckpyc5qak.jpg');
    res.sendFile(imagePath);
});
app.get("/video", (req, res) => {
    const videoPath = path.join(__dirname, 'videoplayback.mp4');
    res.sendFile(videoPath);
});
// app.use('/users',userRouts);

app.listen(port,()=>{
    console.log(`my application is openin the port`)
})