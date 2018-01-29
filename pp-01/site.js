$("#contact-form").on("submit", function(e) {
  var textEmail = $("#form-email").val();
  var textTel = $("#form-tel").val();
  var textDate = $("#form-date").val();
  var reEmail = /.*@.*/;
  var reTel = /\d{10}/;
  var formValid = true;
  $(".user-alert").remove();

  if (!reEmail.test(textEmail)) {
    formValid = false;
    $("#contact-form ol").append("<li class='user-alert'>Invalid email address.</li>");
  }
  if (!reTel.test(textTel)) {
    formValid = false;
    $("#contact-form ol").append("<li class='user-alert'>Invalid phone number.</li>");
  }
  if (textDate.length == 0) {
    formValid = false;
    $("#contact-form ol").append("<li class='user-alert'>Invalid date of birth.</li>");
  }
  if (formValid) {
    $(this).remove();
    $("#content").append("<p>Thank you for your input.</p>");
  }
  e.preventDefault();
});
