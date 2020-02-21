const links = document.querySelectorAll('a');

const onClick = (event: MouseEvent) => {
	const a = event.target as HTMLAnchorElement;

	const element = document.querySelector(a.getAttribute('href'));

	if (!element || !element.scrollIntoView) {
		return;
	}

	event.preventDefault();
	element.scrollIntoView({
		behavior: 'smooth',
		block: 'center',
		inline: 'center',
	});
};

for (let index = 0; index < links.length; index++) {
	const link = links[index];
	link.addEventListener('click', onClick);
}

export {};
