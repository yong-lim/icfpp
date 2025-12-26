function formFocus() {
  $('#alert-field').hide().addClass('hidden');
}

function formReset() {
  $('#alert-field').show()
    .html("<span><p>Thank you. We send out InfoFlow every Wednesday. Please let us know if you don't get one in a week or two.</p></span><br>");
  setTimeout(() => {
    $('#sendButton').show();
    $('#alert-field').hide().addClass('hidden');
    document.getElementById("formID").reset();
    console.log('setTimeout for 5 seconds!');
  }, 5000);
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
function sendInfoFlow(e) {
  console.log("in sendInfoFlow");
  //prevent the form from submiting so we can post to the google form
  e.preventDefault();
  pleaseWaite();

  // form is in yong@icfpp.org
  // https://docs.google.com/forms/d/e/1FAIpQLSfQT-2Hl2rzyjy0D6GoXDH5sDpyjQFPzOLnDZmSjyTit0pBsA/viewform
  const formID  = '1FAIpQLSfQT-2Hl2rzyjy0D6GoXDH5sDpyjQFPzOLnDZmSjyTit0pBsA';
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
