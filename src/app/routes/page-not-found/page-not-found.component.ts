import { ApplicationRef, Component, HostListener } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
	selector: 'app-page-not-found',
	standalone: true,
	imports: [],
	templateUrl: './page-not-found.component.html',
	styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
	constructor(private applicationRef: ApplicationRef) {}

	isInitialAnimationStarted: boolean = false;

	view404 = { value: 304 };

	@HostListener('window:focus') onFocus() {
		// this prevent the view404.value freezing because the tab is unfocused
		this.applicationRef.tick();
		if (!this.isInitialAnimationStarted) {
			anime.remove(this.view404);
			this.view404.value = 404;
		}
	}

	ngOnInit() {
		this.isInitialAnimationStarted = true;

		anime({
			targets: [this.view404],
			value: 404,
			round: 1,
			delay: 0,
			duration: 1000,
			easing: 'easeOutExpo',
		});

		anime({
			targets: '.numbering',
			opacity: [0, 1],
			delay: 0,
			duration: 1000,
			easing: 'easeOutCubic',
		});
		anime({
			targets: '.top-half-container',
			height: ['100vh', '0vh'],
			duration: 1000,
			delay: 1500,
			easing: 'easeOutCubic',
		});
		anime({
			targets: '.bottom-half-container',
			height: ['0vh', '100vh'],
			duration: 700,
			delay: 1500,
			easing: 'easeOutQuad',
		});
	}
}
