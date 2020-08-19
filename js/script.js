console.log('js');

$('.ty--msg').hide();

$(document).ready(function(){

  $('#sub--button').submit(function(e){
    e.preventDefault()
    $('.ty--msg').show();
  });

});
