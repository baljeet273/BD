//Create a Server
const express=require('express');
const app=express();

//Put Or POST case 
const bodyParser = require('body-parser');

//Specifically parse JSON data & add it to request.Body Object 
app.use(bodyParser.json());

//Initialize Port
app.listen(3000,()=>{
    console.log("Server Started at port no. 3000 ")
})

// Create A Route
app.get('/',(request, response) =>{
    response.send("Hello jee, kaise ho saree");
})

app.post('/api/cars',(request,response)=>{
    const{name,brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully")
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017//myDatabse',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(() =>{console.log("Connection Successful")})
.catch((error) => {console.log("received an error")});