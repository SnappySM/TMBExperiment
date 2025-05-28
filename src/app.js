import express, { json } from 'express';
import dotenv from 'dotenv';

dotenv.config()
console.log(process.env.TMB_API_KEY)

const app = express()
const PORT = 3000

app.use(json())

app.get('/', (req, res)=>{
    res.status(200)
    res.send("Welcome to root URL of Server")
})

app.listen(PORT, (error) => {
    if(!error){
        console.log("Server is Successfully Running and App is listening on port " + PORT)
    } else {
        console.log("Error occurred, server can't start", error)
    }
})