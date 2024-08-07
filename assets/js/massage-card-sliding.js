$(function() {

	$(".prev").on('click', function(event) {
		event.preventDefault();
		prevSlide();
	});

	$(".next").on('click', function(event) {
		event.preventDefault();
		nextSlide();
	});

	if ($(".item").length <= 1) {
		$(".next").addClass('hide-nav');
	}

	$(".prev").addClass('hide-nav');

	function nextSlide() {
		var atual = $(".cd_slider").find('.current_card'),
			next = atual.next();

		next.addClass('current_card').removeClass('prev_slide').siblings().removeClass('current_card');
		next.prevAll().addClass('prev_slide');

		if (next.index() > 0) {
			$(".prev").removeClass('hide-nav');
		}
		if (next.index() == $(".item").last().index()) {
			$(".next").addClass('hide-nav');
		}
	}

	function prevSlide() {
		var atual = $(".cd_slider").find('.current_card'),
			prev = atual.prev();

		prev.addClass('current_card').removeClass('prev_slide').siblings().removeClass('current_card');

		if (prev.index() !== $(".item").last().index()) {
			$(".next").removeClass('hide-nav');
		} 
		if (prev.index() == 0) {
			$(".prev").addClass('hide-nav');
		}
	}

});