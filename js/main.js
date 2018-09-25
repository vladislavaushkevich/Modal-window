// Modal window
var delay_popup = 1000;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);

// Tabs
$(document).ready(function(){
$(".block-place").on("click", ".block-place__tab", function() {
    
    $(".block-place").find(".active").removeClass("active");
 
    
    $(this).addClass("active");
  $(".block-place__content").eq($(this).index()).addClass("active");
});
});

$(document).ready(function(){
$(".time").on("click", ".time__tab", function() {
    
    $(".time").find(".active").removeClass("active");
 
    
    $(this).addClass("active");
  $(".time__content").eq($(this).index()).addClass("active");
});
});

$(document).ready(function(){
$(".time2").on("click", ".time__tab", function() {
    
    $(".time2").find(".active").removeClass("active");
 
    
    $(this).addClass("active");
  $(".time__content2").eq($(this).index()).addClass("active");
});
});

$(document).ready(function(){
$(".time3").on("click", ".time__tab", function() {
    
    $(".time3").find(".active").removeClass("active");
 
    
    $(this).addClass("active");
  $(".time__content3").eq($(this).index()).addClass("active");
});
});

$(document).ready(function(){
$(".time4").on("click", ".time__tab", function() {
    
    $(".time4").find(".active").removeClass("active");
 
    
    $(this).addClass("active");
  $(".time__content4").eq($(this).index()).addClass("active");
});
});

