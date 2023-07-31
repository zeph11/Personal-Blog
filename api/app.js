require('dotenv').config();

const express= require('express');
// const expressLayout=require ('express-ejs-layouts')

const app =express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
  }))
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const dotenv=require("dotenv")
const mongoose =require("mongoose")
const postRoute=require("./routes/Post")
const multer =require("multer")
const cors = require('cors');


app.use(cors())
dotenv.config()

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then (console.log("connected")).catch(err=>console.log(err));


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
    cb(null,"images");
}, filename:(req, file, cb)=>{cb(null,"hello.jpg")}})


app.use("/api/posts", postRoute)

const upload=multer({storage:storage})
app.post("api/upload", upload.single("file"), (req, res)=>{
    res.status(200).json("uploaded")
})

const PORT=3000;

app.use('/', (req,res)=>{
    console.log('hey')
})


app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`)
} )




// app.use(express.static('public'))

// app.use(expressLayout);
// app.set('layout','./layouts/main');
// app.set('view engine', 'ejs')

// app.get("", (req, res)=>{
//     res.send("Hello World");
// });