var objStudents = [
    {
        username: "amali",
        password: "amali"
    },
    {
        username: "ishara",
        password: "123"
    }

]

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";

}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";

}

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(var i = 0; i < objStudents.length; i++) {
        if(username == objStudents[i].username && password == objStudents[i].password) {
            /*$.ajax({
                method: 'GET',
                url: 'http://localhost:8080/webapp/api/v1/students',
                data: {username:username,password:password},
                success:function(response){
                    var msg = "";
                    if(response == 1){
                        window.location = "";
                    }
            })*/
            alert(username + " is logged in!!!");
            return;
        }else {

            console.log("incorrect username or password");
        }
    }
}
