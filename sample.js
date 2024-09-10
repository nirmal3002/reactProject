const express=require("express")
const bodyparser=require("body-parser")
const app=express()
const port=5000
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
app.listen(port,()=>{
    console.log(`my application is openin the port`)
})