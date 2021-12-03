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
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { IAppState, metaReducers, reducers } from './store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './store/reducer/router.reducer';
import { checkJWT } from './store/actions/auth.actions';

function initApp(http: HttpClient, router: Router, store: Store<IAppState>) {
	console.log(router.config);
	return () => {
		store.dispatch(checkJWT());
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
	declarations: [AppComponent],
	providers: [
		{
			provide: APP_INITIALIZER,
			useFactory: initApp,
			multi: true,
			deps: [HttpClient, Router, Store],
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: BASE_URL,
			useValue: environment.baseUrl,
		},
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule.forRoot(),
		HttpClientModule,
		ModalModule.Root(),
		AppRoutingModule,
		StoreModule.forRoot(reducers, { metaReducers: metaReducers as any }),
		EffectsModule.forRoot(effects),
		StoreRouterConnectingModule.forRoot({
			serializer: CustomSerializer,
		}),
		environment.production
			? []
			: StoreDevtoolsModule.instrument({
					maxAge: 25,
					logOnly: false,
					autoPause: true,
					features: {
						pause: false,
						lock: true,
						persist: true,
					},
			  }),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
