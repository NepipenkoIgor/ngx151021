import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { IAppState } from '../../store';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
	public constructor(private readonly router: Router, private readonly store: Store<IAppState>) {}

	public canActivate(
		_route: ActivatedRouteSnapshot,
		_state: RouterStateSnapshot,
	): Observable<boolean> {
		const { url } = _state;
		return this.store.select('auth').pipe(
			filter(({ loading }) => !loading),
			take(1),
			switchMap(({ user }) => {
				if (!user && (url === '/login' || url === '/signup')) {
					return of(true);
				}
				if (user && (url === '/login' || url === '/signup')) {
					this.router.navigate(['/dashboard']);
					return of(false);
				}
				if (!user) {
					this.router.navigate(['/login']);
				}
				return of(true);
			}),
		);
	}
}
