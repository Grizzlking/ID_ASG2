
$(document).ready(function () {
    const APIKEY = "63ce80d5969f06502871b127";

    getAccount();

    function getAccount(limit = 1, all = true){
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
        let content = "";
    
        for (var i = 0; i < response.length && i < limit; i++) {
            console.log(i);
            content += response[i].Username + response[i].Password + response[i].Points;
        }
    
        $("#clowncar").html(content);
        });
    }
});