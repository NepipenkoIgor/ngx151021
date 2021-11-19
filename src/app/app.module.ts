import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BASE_URL } from './tokens';
import { AuthInterceptor } from './shared/auth/auth.interceptor';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from './modal/modal.module';
import { Router } from '@angular/router';

function initApp(http: HttpClient, router: Router) {
	console.log(router.config);
	return () => {
		return http.get('assets/config/config.json').pipe(
			tap((data) => {
				console.log('Do something', data);
				// router.resetConfig([
				// 	...router.config,
				// 	{
				// 		path: '**',
				// 		redirectTo: 'dashboard',
				// 	},
				// ]);
			}),
			catchError((err) => {
				console.log(err);
				return EMPTY;
			}),
		);
	};
}

@NgModule({
	declarations: [AppComponent],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: initApp,
			multi: true,
			deps: [HttpClient, Router],
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
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
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule.forRoot(),
		HttpClientModule,
		ModalModule.Root(),
		AppRoutingModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
