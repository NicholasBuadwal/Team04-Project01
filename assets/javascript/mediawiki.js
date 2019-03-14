function callWikiAPI (){
    //grab search query string from image search result
    var searchWiki = $("#label").text().trim().split(" ").join("+");
    console.log(searchWiki)
    
    
    // query currently hardcoded for Mona Lisa
    var wikiQueryURL = "https://en.wikipedia.org/w/api.php"
    
    $.ajax({
        url: wikiQueryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response)
        var pages = response.query.pages;
        var pagesArray = Object.values(pages);
        var extract = pagesArray[0].extract; // this is the extract to be used to populate the page

        
        // Enters code for populating page on screen
        $("#info").empty();
        if (extract){
            $("#info").text(extract);

        } else {
            $("#info").text("Sorry, no entry has been found on Wikipedia.");
        
        //Save user History to localStorage
        var history = JSON.parse(localStorage.getItem("history"));
        console.log(history);
        if (history == null){
            history = [];            
        }        
        var save = {
            "title": searchWiki,
            "description": extract
        }

        history.push(save);

        var historyStr = JSON.stringify(history);
        localStorage.setItem("history", historyStr);

        
    });

};

$(document).ready(function(){
  $('.imageCard').hide();
});
$("#selectedImage").on('click',function(){
  $('.imageCard').show();
})
            
         



