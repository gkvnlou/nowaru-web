import { Component } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	isSplashLogoLoaded: boolean = false;
	isBackgroundLoaded: boolean = false;

	constructor() {}

	ngOnInit() {
		anime({
			targets: [
				'.social-link-pixiv-container',
				'.social-link-x-container',
				'.social-link-instagram-container',
				'.social-link-mail-container',
			],
			opacity: [0, 1],
			delay: anime.stagger(100, { start: 3000 }),
			easing: 'easeOutCubic',
		});

		anime({
			targets: '.wip-lol',
			filter: ['hue-rotate(0deg)', 'hue-rotate(359deg)'],
			duration: 60000,
			loop: true,
			easing: 'linear',
		});
	}

	logoLoadConcluded() {
		this.isSplashLogoLoaded = true;
		// if (!this.isBackgroundLoaded) {
		anime.remove('.logo');
		anime({
			targets: '.logo',
			scale: [1.5, 1],
			opacity: [0, 1],
			duration: 1000,
			easing: 'easeOutCubic',
		});
		// }
	}

	backgroundLoadConcluded() {
		this.isBackgroundLoaded = true;
		anime.remove(['.main-page-carousel']);
		// anime({
		// 	targets: '.logo',
		// 	keyframes: [
		// 		{
		// 			scale: this.isSplashLogoLoaded ? 1 : [1.5, 1],
		// 			opacity: 1,
		// 			duration: 1000,
		// 		},
		// 		{
		// 			opacity: 0,
		// 			delay: 500,
		// 			duration: 500,
		// 		},
		// 	],
		// 	easing: 'easeOutCubic',
		// });

		anime({
			targets: '.main-page-carousel',
			opacity: [0, 1],
			scale: [1.05, 1],
			filter: ['blur(.5rem)', 'blur(0rem)'],
			duration: 1000,
			delay: 1700,
			easing: 'easeOutQuad',
		});

		anime({
			targets: '.main-page-carousel',
			keyframes: [
				{
					objectPosition: ['0% 50%', '5% 50%'],
					easing: 'easeInQuad',
					duration: 6000, // 10% of total time
				},
				{
					objectPosition: ['5% 50%', '95% 50%'],
					easing: 'linear',
					duration: 48000, // 80% of total time
				},
				{
					objectPosition: ['95% 50%', '100% 50%'],
					easing: 'easeOutQuad',
					duration: 6000, // 10% of total time
				},
			],
			direction: 'alternate',
			loop: true,
			easing: 'linear',
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
