'use strict';

(function () {
  var formElement = document.querySelector('.write-us');

  formElement.querySelectorAll('label').forEach(function (element) {
    var inputElement = element.querySelector('input');
    inputElement.addEventListener('focus', function () {
      var caption = inputElement.previousElementSibling;
      if (caption.classList.contains('visually-hidden')) {
        caption.classList.remove('visually-hidden');
      }

      inputElement.addEventListener('blur', function () {
        if (inputElement.value === '') {
          caption.classList.add('visually-hidden');
        }
      });
    });
  });

  formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Форма ушла');
    var modalForm = formElement.querySelector('.write-us__modal--form');
    modalForm.style.display = 'none';
    var modalSubmit = formElement.querySelector('.write-us__modal--submit');
    modalSubmit.style.display = 'block';
  });
})();
'use strict';

var mainElement = document.querySelector('main');
var footerElement = document.querySelector('footer');
var formElement = document.querySelector('.form-wrapper');

var scrollToContentButton = document.querySelector('.button--scroll');
var scrollToFormButton = document.querySelector('.button--form-scroll');
var scrollToFooterButton = document.querySelector('.button--contacts');

var scrollFunc = function scrollFunc(scrollY, currentPosition, stopPosition, lastCurrentPosition) {
  console.log(lastCurrentPosition);
  console.log(currentPosition);
  if (lastCurrentPosition === currentPosition) {
    return;
  }
  if (stopPosition > currentPosition) {
    window.scrollTo(0, scrollY);
    return setTimeout(scrollFunc, 10, scrollY + 10, window.pageYOffset, stopPosition, currentPosition);
  }
  return;
};

scrollToContentButton.addEventListener('click', function () {
  scrollFunc(10, window.pageYOffset, mainElement.offsetTop);
});

scrollToFormButton.addEventListener('click', function () {
  scrollFunc(10, window.pageYOffset, formElement.offsetTop);
});

scrollToFooterButton.addEventListener('click', function () {
  scrollFunc(10, window.pageYOffset, footerElement.offsetTop);
});
console.log(footerElement.scrollHeight);
console.log(footerElement.clientHeight);
console.log(footerElement.scrollTop);
document.body.scrollTop = document.body.scrollHeight;
'use strict';

(function () {
    var prevButton = document.querySelector('.disigns-slider__button--prev');
    var nextButton = document.querySelector('.disigns-slider__button--next');

    prevButton.addEventListener('click', function () {
        var activeSlide = document.querySelector('.slider-item--active');
        var rightSlide = document.querySelector('.slider-item--right');
        var leftSlide = document.querySelector('.slider-item--left');

        rightSlide.classList.remove('slider-item--right');
        rightSlide.classList.add('slider-item--active');
        rightSlide.querySelector('.slider-item__caption').classList.remove('visually-hidden');

        activeSlide.classList.remove('slider-item--active');
        activeSlide.classList.add('slider-item--left');
        activeSlide.querySelector('.slider-item__caption').classList.add('visually-hidden');

        leftSlide.classList.remove('slider-item--left');
        leftSlide.classList.add('slider-item--right');
    });

    nextButton.addEventListener('click', function () {
        var activeSlide = document.querySelector('.slider-item--active');
        var rightSlide = document.querySelector('.slider-item--right');
        var leftSlide = document.querySelector('.slider-item--left');

        rightSlide.classList.remove('slider-item--right');
        rightSlide.classList.add('slider-item--left');

        activeSlide.classList.remove('slider-item--active');
        activeSlide.classList.add('slider-item--right');
        activeSlide.querySelector('.slider-item__caption').classList.add('visually-hidden');

        leftSlide.classList.remove('slider-item--left');
        leftSlide.classList.add('slider-item--active');
        leftSlide.querySelector('.slider-item__caption').classList.remove('visually-hidden');
    });
})();
//# sourceMappingURL=script.js.map
