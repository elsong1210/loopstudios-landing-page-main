

$(function() {


	var $nav_link = $("a.nav-link");
	var $icon_nav = $('.icon');
	var $iconClose_nav = $('.icon_close');
	var $navbarContent = $('.navbarContent');

	$nav_link.on("click", function(){
		$("a.nav-link.active").removeClass("active");
		$(this).addClass("active");
	})
	
	$icon_nav.on('click',function(){
		/*$('.body-content div:not(.navbarContent)').hide();*/

		/*console.log($navbarContent.attr('class'));*/
		if($navbarContent.attr('class') === "navbarContent"){
			$navbarContent.addClass("responsive");
		}
		else{
			$navbarContent.attr('class') = "navbarContent";
		}

		/*if($(window).width()>849){
			$('.body-content div:not(.navbarContent)').show();
		}*/

	})



	$iconClose_nav.on('click',function(){

		/*console.log($('.navbarContent').attr('class'));*/
		if($('.navbarContent').attr('class') === "navbarContent responsive"){
			$navbarContent.removeClass("responsive");
			/*$('.body-content div:not(.navbarContent)').show();*/
		}

	})
});