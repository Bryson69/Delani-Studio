// what we do 
$('.first').click(function () {
    $(this).children('.drop').slideToggle(1300);
    $(this).children('.show').slidetoggle(1400);
  });   
// portfolio
$(".card").hover(function () {
    $(this).children(".card-1").slideToggle(1000, "linear");
  });

// 
$("button").click(function (Bryson) {
    var client = document.getElementById('nameDetail').value;
    alert(' Dear ' + ' customer ' + ' we have received your message successfully. ' + ' Reach out to us anytime');
    Bryson.preventDefault();
  });
//   button
$("button").on('click', function () {
    $('form').each(function () {
      this.reset();
    });
  });