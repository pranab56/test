const express = require('express');
const { controller, controlle1,toolsPatch,toolsDelete } = require('../controler/controler');
const limiter = require('../limitter/limiter');

const router=express.Router();

// ফাস্ট মেথড গেট করার 
/* router.get('/',(req,res)=>{
    res.send('this is request method')
})
router.post('/',(req,res)=>{
    res.send('this is post method')
}) */


// যদি রাউট করার পেরামিটার এর নাম একই থাকে তাহলে আমরা খুব সহজেই এভাবে লিখতে পারি ।
/* router.route('/').get((req,res)=>{
    res.send('this is get method')
}).post((req,res)=>{
    res.send('this is post method')
}) */

router.get('/',controller)
router.post('/',controlle1)
router.patch('/:id',toolsPatch)
router.delete('/:id',toolsDelete)

//এভাবে আমরা আমরা লিখে ইনডেক্স কম্পোনেন্ট থেকে ব্যাবহার করতে পারি। 
/* const getMethod=((req,res)=>{
    res.send('this is get method')
});

const postMethod=(req,res)=>{
    res.send('this is post Method')
} */

module.exports=router;