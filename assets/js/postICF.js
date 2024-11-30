function formFocus() {
  $('#alert-field').hide().addClass('hidden');
}

function formReset() {
  $('#alert-field').show()
    .html("<span><p>Thank you for dropping us a line . . .</p></span><br>");
  document.getElementById("formID").reset();
  setTimeout(() => {
    $('#sendButton').show();
    $('#alert-field').hide();
    console.log('This alert appeared after 3 second!'); 
  }, 3000);
}

function hasError() {
  $('#alert-field').show()
    .html("<span><p><b>Oh no! Something went wrong. Please let us know of your problem.</b></p></span>");
  alert('Oh no! something went wrong. Please let us know of your problem.');
}

function pleaseWaite() {
  // console.log('hide sendButton'); 
  $('#sendButton').hide();
  $('#alert-field').removeClass();
  // console.log('show alert-field'); 
  $('#alert-field').show()
    .html("<div><p>Please wait while we're sending your message . . .</p>  <progress></progress></div>");
}

//selector from your HTML form
function postICF(e) {
  // console.log("in postEatery");
  //prevent the form from submiting so we can post to the google form
  e.preventDefault();
  pleaseWaite();

  // form is in yong@icfpp.org
  const formID  = '1FAIpQLScZ47fKGFJPtLN6bcraqZiZBq8WOcZ6mEpyRD5STR_-D1QqNg';
  const formURL = `https://docs.google.com/forms/d/e/${formID}/formResponse`;     
  //AJAX request
  $.ajax({
    //The public Google Form url, but replace /view with /formResponse
    url: formURL,
    data: $('#formID').serialize(), //Nifty jquery function that gets all the input data 
    type: 'POST', //tells ajax to post the data to the url
    dataType: "json", //the standard data type for most ajax requests
    mode: 'cors',
    statusCode: { //the status code from the POST request
      0: function(data) { //0 is when Google gives a CORS error, don't worry it went through
        //success
        formReset();
       }, 
       200: function(data) {//200 is a success code. it went through!
        //success
        // $('#form-success').text('hooray! 200');
        formReset();
       },
       403: function(data) {//403 is when something went wrong and the submission didn't go through
        //error
        hasError();
      }
    }  
  });
}
