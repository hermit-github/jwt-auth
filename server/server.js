require("dotenv").config();
const cors = require("cors");
require("./config/db")();
const express = require("express")
const app = express();
const port = process.env.PORT ?? 8080;


// standard middlewares

app.use(cors({
    origin:[process.env.REACT_URL],
    methods:["GET","POST"],
    credentials:true
}))
app.use(express.json())


app.get("/",(req,res) => {
    res.status(200).json({
        success:true,
        data:"Welcom to JWT Authentication"
    })
})

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});