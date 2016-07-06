// JavaScript Document
(function($) {
Drupal.behaviors.myBehavior = {
  attach: function (context) {
  $(document).ready(function() {
    // Начало кода
	
	// ЭФФЕКТ ПЛАВНОГО ПОЯВЛЕНИЯ СТРАНИЦ
	$("body").css("display", "none");

    $("body").fadeIn(2000);

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(4000, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
	
	
	
	
	
	var options = {
useEasing : true, 
useGrouping : true, 
separator : ',', 
decimal : '.', 
prefix : '', 
suffix : '' 
};
var demo = new CountUp("myTargetElement", 0, 2887, 0, 8.5, options);
demo.start();


$('.redd').hover(function() {

	$(this).rotate3Di(180, 2000); 
}
);	
	//Конец кода
    });
  }
};
})(jQuery);