import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsFilterPipe } from './products-filter.pipe';
import { SharedModule } from './shared/shared.module';
import { ExchangeRatesComponent } from './header/exchange-rates/exchange-rates.component';
import { ExchangeRatesDirective } from './header/exchange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exchange-rates/hidden.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { environment } from '../environments/environment';
import { BASE_URL } from './tokens';
import { AuthInterceptor } from './auth.interceptor';

/*
 NgModule => es6 module
 imports => import
 exports => export
 declarations => let/const/function
 */

// NgModule, Directive, Pipe, Service
@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		SearchComponent,
		SidenavComponent,
		ProductCardComponent,
		ProductsFilterPipe,
		ExchangeRatesComponent,
		ExchangeRatesDirective,
		HiddenDirective,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: ProductsService,
			//useValue: 100,
			useClass: ProductsService,
		},
		{
			provide: BASE_URL,
			useValue: environment.baseUrl,
			// multi: true,
		},
		{
			provide: 'BASE_URL',
			useValue: 'http://localhost:3000',
			//	multi: true,
		},
	],
	imports: [BrowserModule, BrowserAnimationsModule, SharedModule, HttpClientModule],
	bootstrap: [AppComponent],
})
export class AppModule {}

// let arr = [1, 2, 3, 4, 5];
//Array(100).fill(1, 0, 100);
//Array.from(Array(100).keys());
