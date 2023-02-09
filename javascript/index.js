$(document).ready(function () {
    const APIKEY = "63ce80d5969f06502871b127";

    getAccountDetails();
    getQuizDetails();

    function getAccountDetails(){
        var id = sessionStorage.getItem("id");
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
            for (var i = 0; i < response.length; i++){
                if(id == response[i]._id){
                    $("#username-display").text(response[i].Username)
                    $("#points-display").text(response[i].Points)
                    $(".profile-pic").attr("src",response[i].ProfilePic );
                }
            }

        });
    }

    function getQuizDetails(){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-e35e.restdb.io/rest/quiz",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            }
          }
          
        $.ajax(settings).done(function (response) {
            for(var i = 0; i < response.length; i++){
                $('.wrapped').append(`
                <div class="item" id="${response[i]._id}-block">
                    <a href="#">
                    <div class="card">
                        <img src="${response[i].Image}" alt="banner-img${i}">
                        <div class="card-body">
                        <h5 class="card-title">${response[i].QuizName}</h5>
                        <p class="card-text">${response[i].QuizDesc}</p>
                        </div>
                    </div>
                    </a>
                </div>
                `)
            }
        });
    }

    function hyperlinkToQuizzesPage(subject){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-e35e.restdb.io/rest/quiz",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            }
        }
          
        $.ajax(settings).done(function (response) {
            for(var i = 0; i < response.length; i++){
                if(response[i]["quiz-cat"] == subject){
                    localStorage("subject", subject);
                    window.location.replace("quiz-section-script.html");
                }
            }
        });
    }
});