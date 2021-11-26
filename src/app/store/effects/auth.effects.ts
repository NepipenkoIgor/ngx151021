import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, switchMap, tap } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { loginPending, setUser } from '../actions/auth.actions';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
	public getProductsPending$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loginPending),
			switchMap(({ user }) =>
				this.authService.login(user).pipe(
					map((userWithFullData: any) => {
						return setUser({ user: userWithFullData });
					}),
					tap(() => {
						this.router.navigate(['/dashboard']);
					}),
					catchError(() => EMPTY),
				),
			),
		),
	);

	public constructor(
		private actions$: Actions,
		private authService: AuthService,
		private router: Router,
	) {}
}
