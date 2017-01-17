$(document).ready(function() {


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Карусель
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3
	});

	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
    $(".small_mnu").click(function() {
		$(this).next().children("ul").slideToggle();
	});

	$(".services_mnu").click(function() {
		$(".main_cats").slideToggle();
	});


	$(".cspc-column p a img, .entry-content a img").parent().addClass("fancybox").attr("data-fancybox-group", "group");
	$(".cspc-column p a img").each(function() {
		$(this).attr("src", $(this).parent().attr("href"));
	});
	
	$(".mc_item_wrap ul").each(function() {
		$(this).after("<div class='mc_item_wrap_af'></div>");
	});
	$(".mc_toggle").click(function() {
		if($(this).parent().parent().children("ul").is(":visible")) {
			$(this).parent().parent().children("ul").slideUp();
			$(this).parent().parent().children(".mc_item_wrap_af").hide();
		} else {
			$("body .mc_wrap .mc_item_wrap > ul, .mc_item_wrap_af").hide();
			$(".mc_item_wrap").removeClass("active");
			$(this).parent().parent().addClass("active");
			$(this).parent().parent().children("ul").slideDown();
			$(this).parent().parent().children(".mc_item_wrap_af").show();
		}
	});

});