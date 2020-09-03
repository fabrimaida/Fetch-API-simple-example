// Let's do a simple board of 8x8 boxes.
// Every time the user clicks on a box an Api request (thought Fetch Api)
// ask a truly generated number from 1 to 100.
// If the number is even we paint the box of red.
// If the number is odd we paint the box green.
// Easy as that!

var board = document.getElementById('board');
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
  for (var i = 0; i < 64 ; i++) {
    var context = {
    };
    var html = template(context);
    // JQuery append method-------JQUERY method
    // $(".board").append(html)
    // Simple and plain JSvanilla Method---------JS VANILLA method
    board.innerHTML += html
    // Let's continue here with vanilla JS 'cause is the best.
  }
  // Now we have to do a simple Fetch API request when we click on a a .box element
  // which is inside the DOM in the HTML.
  $('.square').click( function() {
    // Remember to use URLsearchparams at the end of the if you need to change the data from the server,
    // this time we used postman to get everything we needed from the server
    fetch("https://www.random.org/integers/?num=1&min=0&max=88&col=1&base=10&format=plain&rnd=new")
     .then((response) => {
      return response.json();
    })
     .then((data) => {
       // Here we work with the data that we got from the server
       // Let's try first with the append,it works like a charm!
       $(this).find('.number').text(data);
       if (data % 2 == 0) {
         $(this).addClass('red');
       }
       else if (!data % 2 == 0) {
         $(this).addClass('green')
       }
    })
     .catch((error) => {
    alert("Oh gosh,something's wrong here")
    })
  })

  // And that's all folks.Fetch API is the easiest and cleanest way to do a API request
