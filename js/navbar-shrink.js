if ($(window).width() > 992) {
	const delayMs = 300;
	document.getElementById("cart").classList.toggle("align-self-end");

	$(window).scroll(function() {
		if ($(document).scrollTop() > 0) {
			$("nav").addClass("shrink");

			document.querySelector(".nav-searchbar").style = "display : none;";
			setTimeout(function() {
				document.getElementById("cart").classList.remove("align-self-end");
				document.getElementById("cart").classList.add("align-self-center");
				document.querySelector(".shrink-container").classList.remove("pt-2");
				document.querySelector(".shrink-container").classList.add("pt-0");
			}, delayMs);
			document.querySelector(".navbar-brand").style = "height : 40px;";
		} else {
			$("nav").removeClass("shrink");
			document.querySelector(".navbar-brand").style = "height : 85px;";
			setTimeout(function() {
				document.querySelector(".nav-searchbar").style = "display : flex;";
				document.getElementById("cart").classList.remove("align-self-center");
				document.getElementById("cart").classList.add("align-self-end");
				document.querySelector(".shrink-container").classList.remove("pt-0");
				document.querySelector(".shrink-container").classList.add("pt-2");
			}, delayMs);
		}
	});
} else {
	$(window).scroll(function() {
		if ($(document).scrollTop() > 0) {
			$("nav").addClass("shrink");

			document.querySelector(".navbar-brand").style = "height : 40px;";
		} else {
			$("nav").removeClass("shrink");
			document.querySelector(".navbar-brand").style = "height : 85px;";
		}
	});
}
