$(document).ready(function(){
    const APIKEY = "63ce80d5969f06502871b127";

    function signUp(){
        var username = $('#username-input').val();
        var password = $('#password-input').val();

        var jsondata = {
            "Username" : username,
            "Password" : password
        }

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-e35e.restdb.io/rest/account",
            "method": "POST",
            "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }

    
    $("#signUp").on('click',function (event){
        event.preventDefault();
    
        var usernameInput = $('#username-input').val();

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-e35e.restdb.io/rest/account",
            "method": "GET",
            "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
            }
        }
       
        $.ajax(settings).done(function (response) {
            console.log(response); 

            for (var i  = 0; i < response.length; i++) {
                if(response[i].Username == usernameInput ){
                   console.log("Invalid Username as its not unique");
                   alert("Username is already registered. Please try another");
                }
            }

            let password = $("#password-input").val();
            let check_password = $("#check-password").val();

            if (password == ""){
                alert("Field cannot be empty.");
            }
            else if(password != check_password){
                alert("Password didn't match try again.");
            }
            else if(password == check_password){
                signUp();
            }
            
        });   
    })
})
