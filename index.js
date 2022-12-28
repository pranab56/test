const express = require('express');
const cors = require('cors');

const app=express();
const port=process.env.PORT || 5000;
const toolsRoute=require('./Router/tools.route.js')

app.use(cors());
app.use(express.json());
app.use(express.static('public'))

app.use('/tools',toolsRoute)

app.set("view engine","ejs")





app.get('/',(req,res)=>{
    // res.sendFile(__dirname+"/public/index.html")
   res.send('database is ready')
})

app.listen(port,()=>{
    console.log('this is server');
})