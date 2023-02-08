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

                    for (var x  = 0; x < response[0]["item-list"].length; x++){
                        if ($('#' + response[0]["item-list"][x]["item-cat"] ).length){
                        }
                        else{
                            $('#test').append( `
                            <p id="${response[0]["item-list"][x]["item-cat"]}">${response[i]["item-list"][x]["item-cat"]}</p>
                            `)
                        }
                    }
                }
                for (var x = 0; x < response[0]["item-list"].length; x ++){
                    $('#' + response[0]["item-list"][x]["item-cat"]).append(`
                        <p id="${response[0]["item-list"][x]["item-name"]}">${response[0]["item-list"][x]["item-name"]}</p>
                        <input type="button" value="Equip" id="${response[0]["item-list"][x]._id + "-button"}">
                    `)
                    console.log(`${response[0]["item-list"][x]._id + "-button"}`)
                    $(`${response[0]["item-list"][x]._id + "-button"}`).on('click', equipItems(`${response[0]["item-list"][x]._id}`))
                }
            }
            getEquippedDetails();
        });
    }

    function getEquippedDetails(){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-e35e.restdb.io/rest/equip-list",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            }
          }

        $.ajax(settings).done(function (response) {
            for(var i = 0; i < response.length; i++){
                // if (localstorage.getItem("id") == response[i]._id)
                if ("63ce7540aa8607500000f90a" == response[i]["account"][0]._id){
                    for (var x = 0; x < response[i]["item"].length ; x++){
                        $("#" + response[i]["item"][x]._id + "-button").prop( "disabled", true);
                    }
                }
            }
        });
    }

    function deleteFromEquipList(id){
        console.log(id)
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://idasg2-e35e.restdb.io/rest/equip-list/${id}`,
            "method": "DELETE",
            "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log('deleted');
        });
    }

    function searchItemList(id){
        // GET METHOD FOR ITEM LIST
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
            for (var i = 0; i < response.count; i++){
                if (id == response[i]._id){
                    return response[i];
                }
            }  
        });
    }

    function addToEquipList(id){
        var jsondata = {
            item : searchItemList(id)
        };

        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-e35e.restdb.io/rest/equip-list",
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

    function equipItems(selectedItemID){

        // GET METHOD
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-e35e.restdb.io/rest/equip-list",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            }
        }

        // GET METHOD 
        var itemListSettings = {
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
          
          
        $.ajax(itemListSettings).done(function (itemListResponse) {
            $.ajax(settings).done(function (response) {
                /*
                for(var i = 0; i < response.length; i ++){
                    // i goes through the account list
                    //if(localstorage.getItem("id") == response[i]["account"][0]._id){
                    //}
                }
                */

                // instead of 1 use i
                for(var x = 0; x < response[1]["item"].length; x ++){
                    // X goes through the equip list
                    for (var z = 0; z < itemListResponse.length; z ++){
                        // z goes through the item list
                        if(itemListResponse[z]["_id"] == selectedItemID){
                            if (response[1]["item"][x]["item-cat"] == itemListResponse[z]["item-cat"]){
                                deleteFromEquipList(response[1]["item"][x]._id);
                                addToEquipList(itemListResponse[z]["_id"]);
                                var successful = true;
                                break;
                            } 
                        }
                    }
                    // if item is successfully equipped
                    if (successful){
                        break
                    }
                }
            });
        });
    }
    
});
