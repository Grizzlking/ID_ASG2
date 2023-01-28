
$(document).ready(function () {
    const APIKEY = "63ce80d5969f06502871b127";

    function loginCheck(){
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
            
            for (var i = 0; i < response.length; i++) {
                
                var usernameInput = $('#username-input').val();
                var passwordInput = $('#password-input').val();

                if(response[i].Username == usernameInput && response[i].Password == passwordInput){
                    sessionStorage.setItem("username", response[i].Username);
                    console.log("LOGIN SUCCESSFULLY");
                }
            }
        });
    }

    // Event Listener
    $("#login-submit").on("click", function(e){
        loginCheck();
    });

    function postDetails(){
        var jsondata = {"field1": "xyz","field2": "abc"};
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

    
});