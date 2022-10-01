setTimeout(function(){
    $('.loader-bg').fadeToggle();
}, 1500);



function gotowhatsapp() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/+9940702869086?text="
        + "Adı: " + name + "%0a"
        + "E-Posta: " + email + "%0a"
        + "Mesaj: " + message;

    window.open(url, '_blank').focus();
}

function gotowhatsapp2() {

    var fgname = document.getElementById("fgname").value;
    var fgadres = document.getElementById("fgadres").value;
    var fgnumber = document.getElementById("fgnumber").value;
    var service = document.getElementById("service").value;


    var url = "https://wa.me/+9940702869086?text="

    + "Adı: " + fgname + "%0a"
    + "Adres: " + fgadres + "%0a"
    + "Sayı: " + fgnumber + "%0a"
    + "Figür: " + service;

    window.open(url, '_blank').focus();
}




// Get the modal
var modal = document.getElementById("WebModal");

// Get the button that opens the modal
var btn = document.getElementById("menubtnnav");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

ScrollReveal().reveal('.site-kayma', { delay: 500 });
ScrollReveal().reveal('.one1', { delay: 250 });
ScrollReveal().reveal('.one2', { delay: 500 });
ScrollReveal().reveal('.one3', { delay: 1000 });
ScrollReveal().reveal('.card-1', { delay: 500 });
ScrollReveal().reveal('.card-2', { delay: 1000 });
ScrollReveal().reveal('.card-3', { delay: 1500 });
ScrollReveal().reveal('.card-4', { delay: 2000 });
ScrollReveal().reveal('.card-5', { delay: 2500 });
ScrollReveal().reveal('.card-6', { delay: 3000 });
ScrollReveal().reveal('.card-7', { delay: 3500 });
ScrollReveal().reveal('.card-8', { delay: 4000 });
ScrollReveal().reveal('.card-9', { delay: 4500 });
ScrollReveal().reveal('.card-10', { delay: 5000 });
ScrollReveal().reveal('.card-11', { delay: 5500 });
ScrollReveal().reveal('.card-12', { delay: 6000 });
ScrollReveal().reveal('.card-13', { delay: 6500 });
ScrollReveal().reveal('.card-14', { delay: 7000 });
ScrollReveal().reveal('.card-15', { delay: 7500 });
ScrollReveal().reveal('.card-16', { delay: 8000 });
ScrollReveal().reveal('.card-17', { delay: 8500 });
ScrollReveal().reveal('.card-18', { delay: 9000 });
ScrollReveal().reveal('.card-19', { delay: 9500 });
ScrollReveal().reveal('.card-20', { delay: 10000 });


window.sr=ScrollReveal();

sr.reveal('.scroll-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 900
    
})

sr.reveal('.scroll-top',{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 900
    
})

sr.reveal('.scroll-left',{
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 900
    
})

sr.reveal('.scroll-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 900
    
})



ScrollReveal({ reset: true });





