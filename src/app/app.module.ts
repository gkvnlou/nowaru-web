import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
	declarations: [AppComponent, HomeComponent],
	providers: [],
	bootstrap: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, NavbarComponent],
})
export class AppModule {}
