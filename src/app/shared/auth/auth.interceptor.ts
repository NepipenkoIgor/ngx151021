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
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	public constructor(@Inject(BASE_URL) private readonly baseUrl: string) {}

	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		let headers: HttpHeaders = req.headers.append('Content-Type', 'application/json');

		if (/^assets/.test(req.url)) {
			return next.handle(
				req.clone({
					headers,
				}),
			);
		}

		headers = headers.append(
			'Authorization',
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE2MDA3MDg1MzJ9.Uch-jamBl7U9XF_m1riA9APROi_lO-mkDmnjjuv8Kv8',
		);

		const reqJson: HttpRequest<any> = req.clone({
			url: `${this.baseUrl}${req.url}`,
			headers,
		});

		return next.handle(reqJson).pipe(
			filter((event: HttpEvent<any>): event is HttpResponse<any> => event instanceof HttpResponse),
			map((res: HttpResponse<any>) => {
				return res.clone({ body: res.body && res.body.data });
			}),
		);
	}
}
