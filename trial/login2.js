function validate(){
    var userid=document.getElementById('userid').value;
    var password=document.getElementById('password').value;
if(userid=='Vanita'&& password=='radhe'){
     window.location.assign("Experiment-3.html");
     alert("Login successfully");
    }
    else{
        window.location.assign("trial/login.html");
        alert("Login failed");
     
    }
}