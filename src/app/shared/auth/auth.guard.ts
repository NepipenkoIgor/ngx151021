import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
	public constructor(private readonly router: Router) {}

	public canActivate(
		_route: ActivatedRouteSnapshot,
		_state: RouterStateSnapshot,
	): Observable<boolean | UrlTree> {
		const { url } = _state;
		return of(false).pipe(
			switchMap((isLogIn) => {
				if (!isLogIn && (url === '/login' || url === '/signup')) {
					return of(true);
				}
				if (isLogIn && (url === '/login' || url === '/signup')) {
					this.router.navigate(['/dashboard']);
					return of(false);
				}
				if (!isLogIn) {
					this.router.navigate(['/login']);
				}
				return of(isLogIn);
			}),
		);
	}
}
