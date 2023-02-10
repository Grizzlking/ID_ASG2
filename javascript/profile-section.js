$(document).ready(function () {
    const APIKEY = "63ce80d5969f06502871b127";

    getAccountDetails();

    function getAccountDetails(){
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
                //if(response[i]._id == localstorage.getItem("id")){}
                 // for categories in item list
                for (var i  = 0; i < response[0]["item-list"].length; i++) {
                    $('#profile-img').val(response[0].ProfilePic);
                    $('#profile-name').val(response[0].Username);               
                }
                
                for (var x  = 0; x < response[0]["item-list"].length; x++){
                    if ($('#' + response[0]["item-list"][x]["item-cat"] ).length){
                    }
                    else{
                        $('#test').append( `
                        <p id="${response[0]["item-list"][x]["item-cat"]}">${response[0]["item-list"][x]["item-cat"]}</p>
                        `)
                    }
                }

                for (var x = 0; x < response[0]["item-list"].length; x ++){
                    $('#' + response[0]["item-list"][x]["item-cat"]).append(`
                        <p id="${response[0]["item-list"][x]["item-name"]}">${response[0]["item-list"][x]["item-name"]}</p>
                        <input type="button" value="Equip" id="${response[0]["item-list"][x]._id + "-button"}">
                    `)

                    $(`#${response[0]["item-list"][x]._id + "-button"}`).on('click',
                     function (){
                        equipItems(`${response[0]["item-list"][x]._id}`, `${response[0]._id}`)
                    })
                }
            }
        });
    }

    function equipItems(itemID, accountID){
        var field = '';
        console.log(item["item-cat"])
        console.log(accountID)
        if (item["item-cat"] == 'Text'){
            field = ["text-color"];
        }   
        else if (item["item-cat"] == 'Title'){
            field = ["profile-title"];
        }
        console.log(field)

        var jsondata = {field : item.change};
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://idasg2-e35e.restdb.io/rest/account/${accountID}`,
            "method": "PUT",
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

    
    /*
    function getItems(itemID){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-e35e.restdb.io/rest/item-list",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            }
        }
          
        $.ajax(settings).done(function (response) {
            for (var i = 0; i < response[i].length; i++){
                if (response[i]._id == itemID){
                    equipItems(response[i]);
                }
            }
        });
    }*/

});
