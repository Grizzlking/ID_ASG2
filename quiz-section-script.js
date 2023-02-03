$(document).ready(function () {
    const APIKEY = "63ce80d5969f06502871b127";

    retrieveQuizData();

    function retrieveQuizData(){
        let content = "";

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
            console.log(response);
            // Replace geography with appropiate cat
            $('#test').append(`<h1>Geography</h1>`) 
            
            for (var i = 0; i < response.length; i++){
                if (response[i].QuizCat == 'Geography'){
                    $('#test').append(`
                    <div class="quiz-block">
                        <div class="image-container">
                            <img src="${response[i].Image}">
                        </div>
                        <div class="text-container">
                            <h2>${response[i].QuizName}</h2>
                            <p>${response[i].QuizDesc}</p>
                        </div>
                    </div>`)
                }

            }
        });
    }
});