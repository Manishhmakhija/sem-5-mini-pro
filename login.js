function validate(){
    var userid=document.getElementById('userid').value;
    var password=document.getElementById('password').value;
if(userid=='Vanita'&& password=='radhe'){
     window.location.assign("indexnew.html");
     alert("Login successfully");
    }
    else{
        window.location.assign("trial/login.html");
        alert("Login failed");
     
    }
}