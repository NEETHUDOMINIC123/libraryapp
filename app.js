const express=require('express');
const app=new express();
methodOverride = require("method-override");

const port=process.env.PORT || 3000;

const nav=[{
        link:'/users',name: 'login'
},
{
        link:'/users/signup', name:'signup'
}];

const home1=require('./public/js/home1');
const home2=require('./public/js/home2');

const booksRouter=require('./src/routes/booksrouter')(home2);
const adminRouter=require('./src/routes/adminrouter')(home2);
const userRouter=require('./src/routes/userrouter')(nav,home1,home2);
const authorsRouter=require('./src/routes/authorsrouter')(home2);
const newRouter=require('./src/routes/newrouter')(home1)
const newauthorRouter=require('./src/routes/newauthorrouter')(home1)

app.use('/admin',adminRouter);
app.use('/books',booksRouter);
app.use('/users',userRouter);
app.use('/authors',authorsRouter);
app.use('/newbooks',newRouter);
app.use('/newauthors',newauthorRouter);

app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');



app.get('/',function(req,res){
    res.render("index",{
        nav,
        title:'Library App'
    });
})




 app.listen(port,()=>{
    console.log("server is ready at" + port);
    console.log("admin- email id:needhudomini@gmail.com\npassword: 1234" )

});






