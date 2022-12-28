let person=[
    {id:1,name:'pronab'},
    {id:2,name:'emon'},
    {id:3,name:'pronab'},
    {id:4,name:'krishno'},
]

module.exports.controller=(req,res)=>{
    // const {name,value}=req.query;
    // const {id}=req.params;
    // console.log(id);
    
    res.send(person)
}
module.exports.controlle1=(req,res)=>{
   person.push(req.body);
   const personName='pronab';
   
   
   const find=person.filter(p=>p.name==personName);
   res.send(find)
}

module.exports.toolsPatch=(req,res)=>{
    const {id}=req.params;
    const newPerson=person.find(p=>p.id==Number(id));
    newPerson.id=id;
    newPerson.name=req.body;
    res.send(newPerson);
}
module.exports.toolsDelete=(req,res)=>{
    const {id}=req.params;
   person= person.filter(p=>p.id != Number(id));
    res.send(person)
   
}