console.log('js');

$('.booking--page').hide();
$('.contact--page').hide();

$(document).ready(function(){

  $('#booking--page').click(function(){
    $('.booking--page').show();
    $('.home--page').hide();
    $('.contact--page').hide();
  });

  $('#booking--page--button').click(function(){
    $('.booking--page').show();
    $('.home--page').hide();
    $('.contact--page').hide();
  });

  $('#contact--page').click(function(){
    $('.booking--page').hide();
    $('.home--page').hide();
    $('.contact--page').show();
  });

  $('#home--page').click(function(){
    $('.booking--page').hide();
    $('.home--page').show();
    $('.contact--page').hide();
  });

  $('#home--page--button').click(function(){
    $('.booking--page').hide();
    $('.home--page').show();
    $('.contact--page').hide();
  });


});
