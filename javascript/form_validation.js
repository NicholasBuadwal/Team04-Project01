/*Validate the length of the letter (more than or less than then returns true and allows it to pass. Validate by filtering bad words potentially
Harder: the actual image name (the API will only work with the certain words). Add error checking (this returned no search results
var x
var y
var b
var z
var t = false
*/

    //image upload (we will restrict by image type)
    var inputField1 = $("#label");
    
    // title section (we will restrict offensive words)
    var inputField2 = $("#info");

    // descritption section (encode for error 400 if the results do not return anything)
    var inputField3 = $("info");
    
    var inputFieldConfirm1 = false;

    var inputFieldConfirm2 = false;

    var inputFieldConfirm3 = false;

    //validation for image upload is separate
    /*function ValidateFileUpload() {
        var fuData = document.getElementById('display');
        var FileUploadPath = fuData.value;

        //To check if user upload any file
        if (FileUploadPath == '') {
            alert("Please upload an image");

        } else {
            var Extension = FileUploadPath.substring(
                    FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
    
    //The file uploaded is an image
    if (Extension == "gif" || Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg") {

        // To Display
        if (fuData.files && fuData.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('#blah').attr('src', e.target.result);
            }

            reader.readAsDataURL(fuData.files[0]);
        }
    }
    else {
        alert("Photo only allows file types of GIF, PNG, JPG, JPEG and BMP.");

    }
}
}*/
    /*var onInputChange1 = function(event){
        var fileUpload = event.target.value()
        if(text > 0){
            inputField1 = text
            inputFieldConfirm1 = true
        }else{
            return
        }
    }*/
    var onInputChange1 = function(event){
        var text = event.target.value();
        if(text > 0){
            inputField1 = text;
            inputFieldConfirm1 = true;
        }
        else{
            inputFieldConfirm1 = false;
            $("#label").text("Invalid Entry");
            console.log("Invalid Entry");
        }
    }
    var onInputChange2 = function(event){
        var text = event.target.value();
        if(text > 0){
            inputField2 = text;
            inputFieldConfirm2 = true;
        }else{
            inputFieldConfirm2 = false;
            $("#info").text("Invalid Entry");
            console.log("Invalid Entry")
        }
    }

    //Code for validating a 404 Error
    /*fetch blocked by CORS
    fetch("https://en.wikipedia.org/w/api.php")
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }).then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.log(error);
        $("#info").text("Invalid Request");
    });*/

var url = "https://en.wikipedia.org/w/api.php"
function UrlExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status = 400) {
    $("#info").text("Invalid Request");
    }
    else
        console.log("ok");
}   
    /*Not needed since we are not submitting anything
    var onSubmit = function(){
        // validating all inputs are inputted
        if(inputFieldConfirm1 && inputFieldConfirm2 && inputFieldConfirm3){
            // this would be were you'd send off the information
        }else{
            console.log('input field is blank')
        }
    }*/