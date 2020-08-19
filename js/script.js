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
  });

  $('#home--page').click(function(){
    $('.booking--page').hide();
    $('.home--page').show();
    $('.contact--page').hide();
    $('.menu--page').hide();
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

  })

});
