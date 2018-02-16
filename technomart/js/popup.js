	var popupInCart = document.querySelector(".modal--product-in-cart");
	var closeInCart = document.querySelector(".modal__button-close");
	var buy = document.querySelectorAll(".button--green");



	for(var i = 0; i < buy.length; i++) {
	buy[i].addEventListener("click", function(evt) {
		evt.preventDefault();
		popupInCart.classList.add("modal--show");
	});
	}

	closeInCart.addEventListener("click", function(evt) {
		evt.preventDefault();
		popupInCart.classList.remove("modal--show");
	});

	window.addEventListener("keydown", function(evt) {
		if(evt.keyCode === 27) {
			if(popupInCart.classList.contains("modal--show")) {
				popupInCart.classList.remove("modal--show");
			}
		}
	});
