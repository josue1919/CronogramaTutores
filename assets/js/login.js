

var user={email:"admin@admin.com",password:"1234", rol:"admin"}

function LoginUser(){
    let us=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    console.log(us)

    if(user.email==us&&user.password==pass){
           if(user.rol!="admin"){
               alert("no puedes pasar");
           }else{
            location.href="/index/index.html"
           }
    }else{
        $(document).ready(function(){
            $('.toast').toast('show');
    
        });
       
    }




}