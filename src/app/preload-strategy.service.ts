import { PreloadingStrategy, Route } from '@angular/router';
import { delay, mergeMap, Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

export class PreloadStrategyService implements PreloadingStrategy {
	public preload(_: Route, fn: () => Observable<any>): Observable<any> {
		return of(_).pipe(
			filter((route: Route) => route.path === 'login' || route.path === 'signup'),
			delay(5000),
			mergeMap((route: Route) => {
				console.log(route);
				return fn();
			}),
		);
	}
}
