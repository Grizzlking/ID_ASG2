$(document).ready(function(){
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
            
            // For creating the categories
            for (var i = 0; i < response.length; i++){
                if ($('#' + response[i].QuizCat + '-category').length){
                }
                else{
                    content = `${content}
                    <div class="category-heading">
                        <h1>${response[i].QuizCat}</h1>
                        <a href="#">
                            <p>more...</p>
                        </a>
                    </div>
                    <div class="quiz-category" id="${response[i].QuizCat}-category">
                        <div id = "inner-content">
                        </div>  
                    </div>`
                }
                
                $("#test").html(content);
            }

            for (var i = 0; i < response.length; i++){
                if ($('#' + response[i].QuizCat + '-category' + ' ' + '.quiz-details').length < 5){
                    $('#' + response[i].QuizCat + '-category #inner-content').append(`
                        <div class="quiz-details">
                            <div class="image-container">
                                <img src="${response[i].Image}">
                            </div>
                            <h2>${response[i].QuizName}</h2>
                        </div>`)
                    }
                }
        });
    }
})