function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


$(function() {
  var box = $('.box');
  var button = $('.open-menu, .header-menu');
  button.on('click', function(){
    box.toggleClass('active');
  });
});