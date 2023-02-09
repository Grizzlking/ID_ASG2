$(document).ready(function () {
    var timeForQuiz = 60000;

    $('#answer-input').hide();
    $('#submit-button').hide();

    var minutes = Math.floor((timeForQuiz % (100 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((timeForQuiz % (1000 * 60)) / 1000);

    $('.timer').text(minutes + "m " + seconds + "s");

    $('#start-quiz-button').on('click', function(event){
        event.preventDefault();

        $('#answer-input').show();
        $('#submit-button').show();

        var x = setInterval(function(){
            var difference = timeForQuiz -= 1000

            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);

            $('.timer').text(minutes + "m " + seconds + "s")

            if(difference < 0){
                gameOver();
                clearInterval(x);
            }
        }, 1000);
    })

    function gameOver(){

    }

})