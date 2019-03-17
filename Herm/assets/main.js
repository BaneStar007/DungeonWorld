function selectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

document.body.addEventListener("click", function(e) {
    var target = e.target;
    if (target.tagName === "INPUT" &&
        target.getAttribute('class').indexOf('liga') === -1) {
        target.select();
        document.execCommand('copy');
        $("#flash-wrapper").fadeIn().delay(2000).fadeOut();
    }
});

$(".glyph-class").on('click', function(){
  selectText($(this).attr("id"));
  document.execCommand('copy');
  $("#flash-wrapper").fadeIn().delay(2000).fadeOut();
});

$(document).ready(function(){
  $(".glyph-class").each(function(){
    $(this).attr("id","glyph-"+$(this).text().substr(10,4));
  });
  $("#help").on('click',function(e){
    if ($("#about").hasClass("expanded")) {
      $("#about").removeClass("expanded").slideUp();
    } else {
      $("#about").addClass("expanded").slideDown();
    }
    e.preventDefault();
  });
  $(document).keydown(function(e) {
    if (e.keyCode == 16) {
      $(".glyph-code").each(function(){
        var code = $(this).val().substr(2,4);
        $(this).val("&#x"+code+";").addClass("html-code");
      });
    }
  });
  $(document).keyup(function(e) {
    if (e.keyCode == 16) {
      $(".glyph-code").each(function(){
        var code = $(this).val().substr(3,4);
        $(this).val("U+"+code).removeClass("html-code");
      });
    }
  });
  $("#back-to-top").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 1000);
    e.preventDefault();
  });
   $("#categories li a").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $($(this).attr("href")).offset().top -100
    }, 1000);
    e.preventDefault();
  });
  $(".glyph-name").each(function(){
    $(this).prev().attr("data-title",$(this).text()).tipper({'follow':true});
  });
  $("#help, #back-to-top").each(function(){
    $(this).tipper({'follow':true});
  });
});