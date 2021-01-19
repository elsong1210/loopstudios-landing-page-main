
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

		if($navbarContent.attr('class') === "navbarContent"){
			$navbarContent.addClass("responsive");
		}
		else{
			$navbarContent.attr('class') = "navbarContent";
		}


	})



	$iconClose_nav.on('click',function(){

		if($('.navbarContent').attr('class') === "navbarContent responsive"){
			$navbarContent.removeClass("responsive");
		}

	})
});