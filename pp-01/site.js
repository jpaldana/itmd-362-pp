$("#contact-form").on("submit", function(e) {
  var textEmail = $("#form-email").val();
  var textTel = $("#form-tel").val();
  var textDate = $("#form-date").val();
  var reEmail = /.*@.*/;
  var reTel = /\d{10}/;
  var formValid = true;
  var minAge = 18;
  var splitDate = textDate.split("-");
  var date = new Date();
  var currentYear = date.getFullYear();
  var textDateYear = splitDate[0];
  var ageValid = true;
  var currentMonth = date.getMonth();
  var textDateMonth = parseInt(splitDate[1], 10) - 1; // subtract one because Date.getMonth returns 0-index months (jan=0)
  var currentDay = date.getDate();
  var textDateDay = parseInt(splitDate[2], 10);
  $(".user-alert").remove();

  if (!reEmail.test(textEmail)) {
    formValid = false;
    $("#contact-form ol").append("<li class='user-alert'>Invalid email address.</li>");
  }
  if (!reTel.test(textTel)) {
    formValid = false;
    $("#contact-form ol").append("<li class='user-alert'>Invalid phone number.</li>");
  }
  if (textDate.length === 0) {
    formValid = false;
    $("#contact-form ol").append("<li class='user-alert'>Invalid date of birth.</li>");
  }
  else {
    // YYYY-MM-DD
    // check if Date is supported
    if (typeof date === "object" && typeof date.getFullYear === "function") {
      if (currentYear - textDateYear < minAge) {
        ageValid = false;
      }
      else if (currentYear - textDateYear === minAge) {
        if (currentMonth < textDateMonth) {
          ageValid = false;
        }
        else if (currentMonth === textDateMonth && currentDay < textDateDay) {
          ageValid = false;
        }
      }
      if (!ageValid) {
        formValid = false;
        $("#contact-form ol").append("<li class='user-alert'>You must be at least " + minAge + " years or older.</li>");
      }
    }
  }
  if (formValid) {
    $(this).remove();
    $("#content").append("<p>Thank you for your input.</p>");
  }
  e.preventDefault();
});
