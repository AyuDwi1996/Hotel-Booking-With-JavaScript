var username = document.getElementById('username');
var pw = document.getElementById('password');
function disableButton(){
    if(localStorage.getItem('isLogin') === "false"){
     
        document.getElementById("paynow").disabled = true;    
    }
}
function enableButton(){
    if(localStorage.getItem('isLogin') === "true"){
     
        document.getElementById("paynow").disabled = false;    
    }
}
//console.log(document.getElementById("login").innerText);
document.getElementById("login-button").addEventListener("click", enableButton);
document.getElementById("login").addEventListener("click", disableButton);
