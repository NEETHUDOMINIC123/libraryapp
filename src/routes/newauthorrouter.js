const express=require('express');
const newauthorRouter=express.Router();

const  Authordata=require('../model/Authordata');

function Router(home1){


    
newauthorRouter.get('/', function(req,res){
    Authordata.find()
    .then(function(authors){

        res.render("newauthors",{
            home1,
            title:'Library',
            authors
        })
    })
  
})

newauthorRouter.get('/:id',function(req,res){
    const id=req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author){
        res.render('newauthor',{
            home1,
            title:'Library App',
            author
        })
    })
  
})
  
      
    
    return  newauthorRouter;
    }
    
    module.exports=Router;
    