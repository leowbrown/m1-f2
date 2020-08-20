const menuBtn = document.querySelector('.menu--btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle("active");
  // if(!menuOpen) {
  //   menuBtn.classList.add('open');
  //   menuOpen = true;
  // } else {
  //   menuBtn.classList.remove('open');
  //   menuOpen = false;
  // }
});


const navLinks = document.querySelector('.nav--list');
const links = document.querySelectorAll('nav--link');


console.log('js');

$('.booking--page').hide();
$('.contact--page').hide();
$('.menu--page').hide();
// $('.home--page').hide();

$(document).ready(function(){


  $('#booking--page').click(function(){
    $('.booking--page').show();
    $('.home--page').hide();
    $('.contact--page').hide();
    $('.menu--page').hide();
    $( ".nav--list" ).toggleClass( "active" )
    // $( ".menu--btn" ).toggleClass( "open" );
  });

  $('#booking--page--button').click(function(){
    $('.booking--page').show();
    $('.home--page').hide();
    $('.contact--page').hide();
    $('.menu--page').hide();
  });

  $('#contact--page').click(function(){
    $('.booking--page').hide();
    $('.home--page').hide();
    $('.contact--page').show();
    $('.menu--page').hide();
    $( ".nav--list" ).toggleClass( "active" );
    // $( ".menu--btn" ).toggleClass( "open" );
  });

  $('#home--page').click(function(){
    $('.booking--page').hide();
    $('.home--page').show();
    $('.contact--page').hide();
    $('.menu--page').hide();
    $( ".nav--list" ).toggleClass( "active" );
    // $( ".menu--btn" ).toggleClass( "open" );
  });

  $('#home--page--button').click(function(){
    $('.booking--page').hide();
    $('.home--page').show();
    $('.contact--page').hide();
    $('.menu--page').hide();
  });

  $('#menu--page').click(function() {
    $('.booking--page').hide();
    $('.home--page').hide();
    $('.contact--page').hide();
    $('.menu--page').show();
    $( ".nav--list" ).toggleClass( "active" );
    // $( ".menu--btn" ).toggleClass( "open" );
  });


});
