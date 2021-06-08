var pass=document.getElementById("password");
var email=document.getElementById("email");
var msg=document.getElementById("error2")

function validate(){
    if(email.value==""&&pass.value==""){
        console.log("false");
        msg.removeAttribute("hidden",true);
        email.style.border="1px solid red";
        pass.style.border="1px solid red";
        return false; 
    }else if(email.value=="" ){
        console.log("false");
        msg.removeAttribute("hidden",true);
        pass.style.border="1px solid black";
        email.style.border="1px solid red";
        return false;
    }else if(pass.value==""){
        console.log("false");
        msg.removeAttribute("hidden",true);
        pass.style.border="1px solid red";
        email.style.border="1px solid black";
        return false;
    }else{
        pass.style.border="1px solid black";
        email.style.border="1px solid black";
        console.log("true");
        return true;
    }
}


// signup form validation

var pass1=document.getElementById("password1");
var email1=document.getElementById("email1");
var username1=document.getElementById("username1");
var msg1=document.getElementById("error2");
function validate1(){
    if(pass1.value=="" && username1==""){
        console.log("false");
        msg.removeAttribute("hidden",true);
        pass1.style.border="1px solid red";
        username1.style.border="1px solid red";
        return false; 
    }else if(username1=="" ){
        console.log("false");
        msg.removeAttribute("hidden",true);
        pass1.style.border="1px solid black";
        username1.style.border="1px solid red";
        return false;
    }else if(pass1.value==""){
        console.log("false");
        msg.removeAttribute("hidden",true);
        pass1.style.border="1px solid red";
        username1.style.border="1px solid black";
        return false;
    }else{
        pass1.style.border="1px solid black";
        username1.style.border="1px solid black";
        console.log("true");
        return true;
    }
    
}



var error1=document.getElementById("error1");
let regexp1= /^([\w\d\.-]+)@([\w\d\.-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
function emailvalidate(){
  if(regexp1.test(email1.value)){
    error1.removeAttribute("hidden","true");
    error1.innerText="valid";
    error1.style.color="green";
    email1.style.border="1px solid black";
    return true;
    
  }else{
    error1.removeAttribute("hidden","true");
    error1.innerText="invalid email"
    error1.style.color="red";
    email1.style.border="1px solid red";
    return false;
   
  }
};


function showfile(){
    let image=document.getElementById("image1");
    let file=image.files;
    var fileReader= new fileReader;
    
fileReader.readAsDataURL(file[0]);
    
}