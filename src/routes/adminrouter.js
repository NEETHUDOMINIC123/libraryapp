const express=require('express');
const adminRouter=express.Router();
const Bookdata=require('../model/Bookdata');
const multer=require("multer");
const path=require("path");

var morgan = require("morgan");
const Authordata = require('../model/Authordata');

adminRouter.use(express.urlencoded({extended:true}))
adminRouter.use(morgan('dev'))

// Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/images',
    filename: function(req, file, cb){
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

// Init Upload
const upload = multer({
    storage: storage
}).single("image");



function Router(nav){

    // Books 

adminRouter.get('/', function(req,res){
    res.render("addbooks",{
        nav,
        title:'Library',
       
    })
})
adminRouter.post('/add',upload, function(req,res){

   
        var items={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.file.filename
        }
        var book=Bookdata(items);
        book.save();
        console.log(" record was added");
        res.redirect('/books');


    })

    // delete

    adminRouter.post("/delete/:id",function(req,res){
        var deleteId= req.params.id;
      Bookdata.findByIdAndDelete(deleteId,function(data){
         res.redirect('/books')
         console.log(" record was deleted");
    })
})


//Get EditForm
adminRouter.get("/:id/edit",(req,res)=>{
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

//Edit Put request
adminRouter.post("/:id/edit",upload,(req, res)=>{
    var dataId=req.params.id;
    
    Bookdata.findByIdAndUpdate(dataId,{
        title:req.body.title,
        author:req.body.author,
        genre:req.body.genre,
       image:req.file.filename
    },function(err,updatedata){
        if(err){
            console.log(err);
            res.redirect("/");
        }else{
            res.redirect("/books");
            console.log("Data updated!")
        }
    })
})

// authors

adminRouter.get('/addauthors', function(req,res){
    res.render("addauthors",{
        nav,
        title:'Library',
       
    })
})

adminRouter.post('/authorsadd',upload, function(req,res){

   
    var items={
        name:req.body.name,
        language:req.body.language,
        Book:req.body.book,
        image:req.file.filename
    }
    var authors=Authordata(items);
    authors.save();
    console.log(" record was added");
    res.redirect('/authors');


})

// Authors Delete 

adminRouter.post("/authorsdelete/:id",function(req,res){
    var deleteId= req.params.id;
  Authordata.findByIdAndDelete(deleteId,function(data){
     res.redirect('/authors')
     console.log(" record was deleted");
})
})

//Get EditForm
adminRouter.get("/authors/:id/edit",(req,res)=>{
    Authordata.findById(req.params.id,function (err, product){
        if(err){
            console.log(err);
            res.redirect("/");

        }else{
            res.render("authorsedit",{
            author: product,
            title:'Library App',
            nav
        });
        }
    })
})


//Edit Put request
adminRouter.post("/authors/:id/edit",upload,(req, res)=>{
    var dataId=req.params.id;
    
    Authordata.findByIdAndUpdate(dataId,{
        name:req.body.name,
        language:req.body.language,
        Book:req.body.Book,
       image:req.file.filename
    },function(err,updatedata){
        if(err){
            console.log(err);
            res.redirect("/");
        }else{
            res.redirect("/authors");
            console.log("Data updated!")
        }
    })
})
return  adminRouter;
}

module.exports=Router;