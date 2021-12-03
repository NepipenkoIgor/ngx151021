import { Inject, Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpHeaders,
	HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../../tokens';
import { filter, map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	public constructor(
		@Inject(BASE_URL) private readonly baseUrl: string,
		private readonly authService: AuthService,
	) {}

	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return this.authService.getTokenFromLocalStorage().pipe(
			switchMap((accessToken: string | null) => {
				let headers: HttpHeaders = req.headers.append('Content-Type', 'application/json');

				if (/^assets/.test(req.url)) {
					return next.handle(
						req.clone({
							headers,
						}),
					);
				}

				headers = headers.append('Authorization', `Bearer ${accessToken}`);

				const reqJson: HttpRequest<any> = req.clone({
					url: `${this.baseUrl}${req.url}`,
					headers,
				});

				return next.handle(reqJson).pipe(
					filter(
						(event: HttpEvent<any>): event is HttpResponse<any> => event instanceof HttpResponse,
					),
					map((res: HttpResponse<any>) => {
						return res.clone({ body: res.body && res.body.data });
					}),
				);
			}),
		);
	}
}
