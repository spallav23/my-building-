const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const session = require('express-session')
const port = 3000
app.use(bodyParser.json())
app.use(cors({
    origin:['http://localhost:5173'],
    methods:["get","post"],
    credentials: true,
}))
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 3000000 }
}));

const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb+srv://spp23102003:spp23102003@cluster0.vhincym.mongodb.net/";
const client = new MongoClient(uri);

const database = client.db("mybuilding");
const Society = database.collection("Society");
const flat = database.collection("flat");
const Maintenance = database.collection("Maintenance");


app.get('/', (req, res) => {
  if (req.session.name) {
    
      res.json({ valid: true, name: req.session.name, email: req.session.email })
  }
  else {
    res.json({ valid: false })
  }
})

// clear-session
app.post('/', (req, res) => {
  req.session.name = "";
  req.session.email="";
  res.json({ valid: false})

})

app.post('/login', async(req, res) => {
    const data =await req.body;
    const result = await Society.findOne({ email: data.email })
    if (result != null && result.password == data.password) {
      req.session.name = result.name;
      req.session.email = data.email;
      res.status(202, "sucsess");
      res.json("login success");
    }
    else {
      console.log("fail login");
      res.status(200, 'invalid');
      res.json("invalid login info");
    }
})


app.post('/signup',async(req, res) => {
    const data =await req.body;
    const result = await Society.findOne({ email: data.email })
    if (result != null) {
      console.log("fail register-email already taken");
      res.status(200).json("invalid demail already taken")
    }
    else {
      req.session.name = data.name;
      req.session.email = data.email;
     const result = await doctor.insertOne(data);
      console.log("success");
      res.status(202).send("ok");
    }
  })


  app.post('/flat',async(req, res) => {
    const data =await req.body;
    const result = flat.findOne({block:data.block,flatNumber:data.flatNumber})
    if(result != null){
      const result = await flat.findOneAndUpdate({block:data.block,flatNumber:data.flatNumber}, { $set: {data} })
    }
    else{
      const result = flat.insertOne(data)
    }
  res.status(202).send("susses")
  })


  app.post('/maintenance',async(req, res) => {
    const data =await req.body;
    const result = Maintenance.insertOne(data)
  
  res.status(202).send("susses")
  })

  app.post('/getflat',async(req, res) => {
    const data =await req.body;
    const result = flat.findOne({email:data.email,block:data.block,flatNumber:data.flatNumber})
  
  res.status(202).json(result)
  })

  app.post('/getmaintenance',async(req, res) => {
    const data =await req.body;
    const result =await Maintenance.find({email:data.email}).toArray()
    console.log(await result);
  res.status(202).json(result)
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})