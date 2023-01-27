$(document).ready(function(){
    $("#click").on('click',function (event){
        event.preventDefault();   

        let password = $("#password").val();
        let check_password = $("#check-password").val();

        if (password == ""){
            alert("Field cannot be empty.");
        }
        else if(password != check_password){
            alert("Password didn't match try again.");
        }
        else if(password == check_password){
            alert("match");
        }
    })
})
