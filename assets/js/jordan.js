$(function() {
  $('.form-control').focus(formFocus);
});

function formFocus() {
  $('#alert-field')
    .removeClass()
    .addClass('hidden');
}

function subInfoFlow(e) {
  e.preventDefault();
  console.log('In subInfoFlow');

  const POST_URL = 'https://script.google.com/macros/s/AKfycbxqksv3AChGJRzAmsAFmGqr4i-WeK7xvSm15bcUr6vENvyt82MQzrfV3QTc33cpOtm5sQ/exec'

  const postRequest = {
    name: e.target['fullname'].value,
    email: e.target['email'].value,
  };
  console.log('name ', postRequest.name);
  console.log('email', postRequest.email);

  if(POST_URL) {
    $.post(POST_URL, JSON.stringify(postRequest))
      .then(res => {
        e.target.reset();
        $('#alert-field')
          .removeClass()
          .addClass(`alert alert-${res.code}`)
          .text(res.msg);
      });

    $('#alert-field')
      .removeClass()
      .html('<progress></progress>')
      .removeClass('hidden');
  } else {
    alert('You must set the POST_URL variable with your script ID');
  }
}

