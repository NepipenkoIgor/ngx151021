import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { environment } from '../environments/environment';
import { BASE_URL } from './tokens';
import { AuthInterceptor } from './auth.interceptor';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ModalModule } from './modal/modal.module';

function initApp(http: HttpClient) {
	return () => {
		// http.get('json')
		//TODO why error
		return http.get('assets/config/config.json').pipe(
			tap((data) => {
				console.log('Do something', data);
			}),
			catchError((err) => {
				console.log(err);
				return EMPTY;
			}),
		);
	};
}

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
			provide: APP_INITIALIZER,
			useFactory: initApp,
			multi: true,
			deps: [HttpClient],
		},
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
	imports: [BrowserModule, BrowserAnimationsModule, SharedModule, HttpClientModule, ModalModule],
	bootstrap: [AppComponent],
})
export class AppModule {}

// let arr = [1, 2, 3, 4, 5];
//Array(100).fill(1, 0, 100);
//Array.from(Array(100).keys());
