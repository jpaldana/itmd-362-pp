$("#contact-form").on("submit", function(e) {
  var textEmail = $("#form-email").val();
  var textTel = $("#form-tel").val();
  var textDate = $("#form-date").val();
  var reEmail = /.*@.*/;
  var reTel = /\d{10}/;
  var formValid = true;
  
  if (!reEmail.test(textEmail)) {
    formValid = false;

  }
  if (!reTel.test(textTel)) {
    formValid = false;
    
  }
});
