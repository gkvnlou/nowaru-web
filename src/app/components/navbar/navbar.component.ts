import { Component } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
	constructor() {}

	ngOnInit() {}

	startNavbarAnimation(target: string) {
		target = '.' + target;
		anime.remove(target);

		anime({
			targets: target,
			backgroundPosition: ['0% 50%', '100% 50%'],
			duration: 300,
			easing: 'easeOutCubic',
		});
	}

	stopNavbarAnimation(target: string) {
		target = '.' + target;
		anime.remove(target);

		anime({
			targets: target,
			backgroundPosition: '0% 50%',
			duration: 300,
			easing: 'easeOutCubic',
		});
	}
}
