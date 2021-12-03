import {
	HttpClientTestingModule,
	HttpTestingController,
	TestRequest,
} from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { BASE_URL } from '../../tokens';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

const accessToken = '123123123adsasda123123';

@Injectable()
class TestAuthService extends AuthService {
	public override getTokenFromLocalStorage(): Observable<string | null> {
		return of(accessToken);
	}
}

describe('[AUTH]: interceptor', () => {
	let httpMock: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				{
					provide: AuthService,
					useClass: TestAuthService,
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
		});

		httpMock = TestBed.inject(HttpTestingController);
	});

	it('should have auth token', inject(
		[AuthService, BASE_URL],
		(authService: AuthService, baseUrl: string) => {
			const url = `${baseUrl}/auth/checkuser`;
			authService.checkUser().subscribe();
			const httpRequest: TestRequest = httpMock.expectOne({
				method: 'GET',
				url,
			});
			expect(httpRequest.request.headers.has('Authorization')).toBeTruthy();
			expect(httpRequest.request.headers.get('Authorization')).toEqual(`Bearer ${accessToken}`);
		},
	));
});
