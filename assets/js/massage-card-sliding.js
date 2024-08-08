

$(function() {

	$(".prev").on('click', function(event) {
		event.preventDefault();
		prevSlide();
	});

	$(".next").on('click', function(event) {
		event.preventDefault();
		nextSlide();
	});

	if ($(".item_card").length <= 1) {
		$(".next").addClass('hide-nav');
	}

	$(".prev").addClass('hide-nav');

	// Auto-slide functionality
	let autoSlideInterval = setInterval(nextSlide, 5000); // Adjust the interval (5000ms = 5s) as needed

	$(".cd_slider").hover(
		function() {
			clearInterval(autoSlideInterval); // Stop auto-slide on hover
		}, 
		function() {
			autoSlideInterval = setInterval(nextSlide, 5000); // Restart auto-slide when not hovering
		}
	);

	function nextSlide() {
		var current = $(".cd_slider").find('.current_items'),
			next = current.next();

		if (!next.length) {
			next = $(".item_card").first(); // Loop back to the first slide
		}

		current.removeClass('current_items');
		next.addClass('current_items').removeClass('prev_slide').siblings().removeClass('current_items');
		next.prevAll().addClass('prev_slide');

		if (next.index() > 0) {
			$(".prev").removeClass('hide-nav');
		} else {
			$(".prev").addClass('hide-nav');
		}

		if (next.index() == $(".item_card").last().index()) {
			$(".next").addClass('hide-nav');
		} else {
			$(".next").removeClass('hide-nav');
		}
	}

	function prevSlide() {
		var current = $(".cd_slider").find('.current_items'),
			prev = current.prev();

		if (!prev.length) {
			prev = $(".item_card").last(); // Loop back to the last slide
		}

		current.removeClass('current_items');
		prev.addClass('current_items').removeClass('prev_slide').siblings().removeClass('current_items');

		if (prev.index() !== $(".item_card").last().index()) {
			$(".next").removeClass('hide-nav');
		} else {
			$(".next").addClass('hide-nav');
		} 

		if (prev.index() == 0) {
			$(".prev").addClass('hide-nav');
		} else {
			$(".prev").removeClass('hide-nav');
		}
	}

});
