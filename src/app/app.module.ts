import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

/*
 NgModule => es6 module
 imports => import
 exports => export
 declarations => let/const/function
 */
// NgModule, Directive, Pipe, Service
@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		FlexLayoutModule,
	],
	exports: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
