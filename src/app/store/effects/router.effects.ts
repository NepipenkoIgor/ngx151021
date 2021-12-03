import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { back, forward, go } from '../actions/router.actions';

@Injectable()
export class RouterEffects {
	public go$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(go),
				tap(({ params: { path } }) => {
					this.router.navigate(path);
				}),
			),
		{ dispatch: false },
	);

	public back$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(back),
				tap(() => {
					this.location.back();
				}),
			),
		{ dispatch: false },
	);

	public forward$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(forward),
				tap(() => {
					this.location.forward();
				}),
			),
		{ dispatch: false },
	);

	public constructor(
		private readonly actions$: Actions,
		private readonly router: Router,
		private readonly location: Location,
	) {}
}
