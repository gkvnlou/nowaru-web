import { Component } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	constructor() {}

	ngOnInit() {
		anime({
			targets: '.logo',
			scale: [1.5, 1],
			opacity: [0, 1],
			duration: 1700,
			easing: 'easeOutQuad',
		});

		anime({
			targets: [
				'.social-link-pixiv',
				'.social-link-x',
				'.social-link-instagram',
				'.social-link-mail',
			],
			opacity: [0, 1],
			delay: anime.stagger(100, { start: 1700 }),
			easing: 'easeOutCubic',
		});

		anime({
			targets: '.main-page-carousel',
			opacity: [0, 1],
			scale: [1.05, 1],
			filter: ['blur(.5rem)', 'blur(0rem)'],
			delay: 3000,
			duration: 1000,
			easing: 'easeOutQuad',
			complete: () => {
				anime({
					targets: '.main-page-carousel',
					backgroundPosition: ['50% 0%', '50% 100%'],
					duration: 90000,
					direction: 'alternate',
					loop: true,
					easing: 'easeInOutQuad',
				});
			},
		});
	}

	socialLinkEnterAnimation(target: string) {
		target = '.' + target;
		anime({
			targets: target,
			translateY: -7,
			rotateZ: '7deg',
			duration: 150,
			easing: 'easeOutQuad',
		});

		target += '-tooltip';
		anime.remove(target);
		anime({
			targets: target,
			opacity: [0, 1],
			translateY: [10, 0],
			rotate: ['15deg', '-5deg'],
			delay: 750,
			duration: 250,
			easing: 'easeOutBack',
			changeBegin: () => {
				const element = document.querySelector(target) as HTMLElement | null;
				if (element) {
					element.style.display = 'block';
				}
			},
		});
	}

	socialLinkLeaveAnimation(target: string) {
		target = '.' + target;
		anime({
			targets: target,
			translateY: 0,
			rotateZ: '0deg',
			duration: 150,
			easing: 'easeOutQuad',
		});

		target += '-tooltip';
		anime.remove(target);
		anime({
			targets: target,
			opacity: [1, 0],
			rotate: ['-5deg', '15deg'],
			translateY: 10,
			duration: 150,
			easing: 'easeOutQuad',
			changeComplete: () => {
				const element = document.querySelector(target) as HTMLElement | null;
				if (element) {
					element.style.display = 'none';
				}
			},
		});
	}
}
