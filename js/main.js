window.addEventListener('scroll', function () {
  const title1 = document.querySelector('.scroll-title-1');
	const title2 = document.querySelector('.scroll-title-2');
	const mainContent = document.querySelector('.main-content');
  const scrollValue = window.scrollY;

  title1.style.transform = `translateX(-${scrollValue*1}px)`;
  title1.style.opacity = 1 - (scrollValue / 500);
	title2.style.transform = `translateX(${scrollValue*1}px)`;
	title2.style.opacity = 1 - (scrollValue / 500);
	if (scrollValue > 500) {
		mainContent.style.opacity = ((scrollValue-500) / 500);
	}
});

const buttons = document.querySelectorAll("[data-carousel-btn]");
const dots = document.querySelectorAll("[data-carousel-dot]");

function slide(button) {
  return () => {
    const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
    const slidesContainer = button
      .closest("[data-carousel]")
      .querySelector("[data-carousel-slides");
    const slides = slidesContainer.querySelectorAll("[data-carousel-slide]");
    const activeSlide = slidesContainer.querySelector("[data-active]");
    const activeSlideIndex = [...slides].indexOf(activeSlide);
    const nextSlideIndex = activeSlideIndex + offset;
    switch (nextSlideIndex) {
    	case -1:
        	moveDot(4)();
        	break;
      	case 1:
        	moveDot(1)();
        	break;
      	case 2:
        	moveDot(2)();
        	break;
		case 3:
			moveDot(3)();
			break;
		case 4:
			moveDot(4)();
			break;
      	default:
        	moveDot(0)();
        	break;
    }
    if (nextSlideIndex < 0) {
      slides[slides.length + nextSlideIndex].dataset.active = true;
      return delete activeSlide.dataset.active;
    }
    if (nextSlideIndex >= slides.length) {
      slides[0].dataset.active = true;
      return delete activeSlide.dataset.active;
    }
    slides[nextSlideIndex].dataset.active = true;
    return delete activeSlide.dataset.active;
  };
}

function moveDot(i) {
  return () => {
    const dot = dots[i];
    dots.forEach((d) => "active" in d.dataset && delete d.dataset.active);
    dot.dataset.active = true;
  };
}

window.addEventListener("DOMContentLoaded", () => {
  buttons.forEach((button) => button.addEventListener("click", slide(button)));
  setInterval(() => {
    slide(buttons[1])();
  }, 3500);
});