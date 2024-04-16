import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { PageNotFoundComponent } from './routes/page-not-found/page-not-found.component';
import { ProjectsComponent } from './routes/projects/projects.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, title: 'NowaruArt' },
	{
		path: 'projects',
		children: [
			{ path: '', component: ProjectsComponent, title: 'NowaruArt - Projects' },
			{
				path: 'gallery',
				component: ProjectsComponent,
				title: 'NowaruArt - Gallery',
			},
		],
	},
	{ path: '**', component: PageNotFoundComponent, title: '🐟404' },
];
