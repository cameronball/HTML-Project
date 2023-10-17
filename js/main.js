// Title animation
window.addEventListener('scroll', function () {
    const title1 = document.querySelector('.scroll-title-1');
	const title2 = document.querySelector('.scroll-title-2');
	const subtitle = document.querySelector('.subtitle');
	const subtitleDivider = document.querySelector('.subtitle-divider');
    const scrollValue = window.scrollY;

    title1.style.transform = `translateX(-${scrollValue*1}px)`;
    title1.style.opacity = 1 - (scrollValue / 500);
	title2.style.transform = `translateX(${scrollValue*1}px)`;
	title2.style.opacity = 1 - (scrollValue / 500);
	if (scrollValue > 500) {
		subtitle.style.opacity = ((scrollValue-500) / 500);
		subtitleDivider.style.opacity = ((scrollValue-500) / 500);
	}
});