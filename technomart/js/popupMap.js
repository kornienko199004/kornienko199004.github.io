
	var popup = document.querySelector(".modal--write-us");
	var link = document.querySelector(".button--contacts");
	var close = document.querySelector(".modal__button-close");

	var form = document.querySelector(".modal__form");
	var userName = document.querySelector("[name='user-name']");
	var userMail = document.querySelector("[name='user-mail']");
	var userMessage = document.querySelector("[name='email-text']");
	var storage = localStorage.getItem("userName");
	var storageMail = localStorage.getItem("userMail");

	var popupMap = document.querySelector(".modal--map");
	var mapLink = document.querySelector(".contacts__map-link");
	var closeMap = document.querySelector(".modal__button-close--map");

	mapLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		popupMap.classList.add("modal--show");
	});

	closeMap.addEventListener("click", function(evt) {
		evt.preventDefault();
		popupMap.classList.remove("modal--show");
	});

	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode ===27) {
			if(popupMap.classList.contains("modal--show")) {
				popupMap.classList.remove("modal--show");
			}
		}
	});


	link.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.add("modal--show");
		if(storage && storageMail) {
			userName.value = storage;
			userMail.value = storageMail;
			userMessage.focus();
		} else {
			userName.focus();
		}
	});

	close.addEventListener("click", function(evt) {
		evt.preventDefault();
		popup.classList.remove("modal--show");
		popup.classList.remove("modal--error");
	});

	form.addEventListener("submit", function(evt) {
		if(!userName.value || !userMail.value || !userMessage.value) {
			evt.preventDefault();
			popup.classList.remove("modal--error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal--error");
		} else {
			localStorage.setItem("userName", userName.value);
			localStorage.setItem("userMail", userMail.value);
		}
	})
	window.addEventListener("keydown", function(evt) {
		if (evt.keyCode ===27) {
			if(popup.classList.contains("modal--show")) {
				popup.classList.remove("modal--show");
				popup.classList.remove("modal--error");
			}
		}
	});
