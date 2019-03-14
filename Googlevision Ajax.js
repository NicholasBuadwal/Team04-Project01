function ajaxVision(img){
    var dataToSend=JSON.stringify({
      requests: [
        {
          features: [
             { type:"WEB_DETECTION", maxResults: 1 }
             ],
               image: {
             content:img
             }
         }
     ]
});
                                                              //↓↓insert API key↓↓\\
    $.ajax({
        url: "https://vision.googleapis.com/v1/images:annotate?key=Api Key",
        method: "POST",
        processData: false,
        contentType: "application/json",
        data: dataToSend,
        success: function (response) {
            console.log(response);
            var tag=response.responses[0].webDetection.webEntities[0].description;
            $("#tag").text(tag);
            console.log(tag);
            callWikiAPI();
        },
    });
 
};
