
const express=require('express');
const booksRouter=express.Router();
const Bookdata=require('../model/Bookdata');


function Router(nav){

booksRouter.get('/', function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render("books",{
            nav,
            title:'Library',
            books
        })
    })
  
})
booksRouter.get('/:id',function(req,res){
    const id=req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('book',{
            nav,
            title:'Library App',
            book
        })
    })
  
})

//Get EditForm
booksRouter.get("/:id/edit",(req,res)=>{
    Bookdata.findById(req.params.id,function (err, product){
        if(err){
            console.log(err);
            res.redirect("/");

        }else{
            res.render("edit",{
            book: product,
            title:'Library App',
            nav
        });
        }
    })
})

  

return  booksRouter;
}

module.exports=Router;