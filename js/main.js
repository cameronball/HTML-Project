// Title animation
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