const express=require('express');
const cors=require("cors");
const mngoose=require('mongoose');
const { default: mongoose } = require('mongoose');

const app=express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/pizza")
.then(()=>console.log("Sucessfully connectef to the pizza database"))
.catch(err=>console.log(err));

const schema=new mongoose.Schema({},{strict:false});

const orderpizza=mongoose.model("orderpizzas",schema);

const schema1=new mongoose.Schema({},{strict:false});

const buildpizzas=mongoose.model("buildpizzas",schema1);

app.get('/',(req,res)=>{
    res.send("Hai from server");
});

app.get('/orderpizzas',async(req,res)=>{
    const piz=await orderpizza.find();
    res.json(piz);
});

app.get('/buildpizzas',async(req,res)=>{
    const piz=await buildpizzas.find();
    res.json(piz);
});

app.listen(3000,()=>{
    console.log("Server is running at the port 3000");
});
