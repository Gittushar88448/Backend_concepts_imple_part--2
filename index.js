const express = require('express')
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000

// middleware to read request's body in the json format
app.use(express.json());

const todoRoutes = require("./routes/Todos");

app.use("/api/v1",todoRoutes);

app.listen(PORT , ()=>{
    console.log(`connected established at port ${PORT}`);
})

const dbConnect = require("./config/database");
dbConnect();

app.get('/' , (req , res)=>{
    res.send(`<h1>This is the homepage </h1>`);
})