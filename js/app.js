var main = function() {

  $('.anchor-row').click(function() {

    window.location = '#' + this.id;

  });
  //
  // $('.anchor-row').click(function(event) {
  //     event.preventDefault();
  //
  //     var target_offset = $('#'+this.id).offset();
  //     var target_top = target_offset.top;
  //
  //     $('html, body').animate({scrollTop:target_top}, 500);
  //
  //     window.location = '#' + this.id;
  //
  // });


  // $(location.hash).addClass('active');
  //
  // $('.anchor a').click(function(){
  //   $('.anchor-row').removeClass('active');
  //
  //   $(this).parent().parent().addClass('active');
  // });

}

$(document).ready(main);
