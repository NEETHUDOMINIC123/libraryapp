const express=require('express');
const newRouter=express.Router();
const Bookdata=require('../model/Bookdata');


function Router(home1){

    newRouter.get('/', function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("newbooks",{
                home1,
                title:'Library',
                books
            })
        })
      
    })

    newRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('newbook',{
                home1,
                title:'Library App',
                book
            })
        })
      
    })

  
      
    
    return  newRouter;
    }
    
    module.exports=Router;
    