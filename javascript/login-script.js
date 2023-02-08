$(document).ready(function () {
    const APIKEY = "63ce80d5969f06502871b127";

    function loginCheck(){
        var usernameInput = $('#username-input').val();
        var passwordInput = $('#password-input').val();

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
                if(response[i].Username == usernameInput && response[i].Password == passwordInput){
                    sessionStorage.setItem("id", response[i]._id);
                }
            }
        });
    }

    // Event Listener
    $("#login-submit").on("click", function(e){
        loginCheck();
    });
});