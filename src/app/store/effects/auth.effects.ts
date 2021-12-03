import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { checkJWT, loginPending, logOut, setUser, signUpPending } from '../actions/auth.actions';
import { AuthService } from '../../shared/auth/auth.service';
import { go } from '../actions/router.actions';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { EMPTY, pipe } from 'rxjs';

@Injectable()
export class AuthEffects {
	public logOutEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(logOut),
			switchMap(() =>
				this.authService.removeTokenFromLocalStorage().pipe(
					map(() => {
						return go({ params: { path: ['login'] } });
					}),
					catchError((err) => {
						console.log(err);
						return EMPTY;
					}),
				),
			),
		),
	);

	public logInEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loginPending),
			switchMap(({ user }) => this.authService.login(user).pipe(this.setUser())),
		),
	);

	public signUpEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(signUpPending),
			switchMap(({ user }) => this.authService.signup(user).pipe(this.setUser())),
		),
	);

	public checkJWTEffect$ = createEffect(() =>
		this.actions$.pipe(
			ofType(checkJWT),
			switchMap(() =>
				this.authService.checkUser().pipe(
					map((userWithFullData: any) => {
						return setUser({ user: userWithFullData });
					}),
					catchError((err) => {
						console.log(err);
						return EMPTY;
					}),
				),
			),
		),
	);

	public constructor(private actions$: Actions, private authService: AuthService) {}

	private setUser() {
		return pipe(
			switchMap((user) => this.authService.tokenToLocalStorage(user)),
			mergeMap((userWithFullData: any) => {
				return [
					setUser({ user: userWithFullData }),
					go({
						params: { path: ['dashboard'] },
					}),
				];
			}),
			catchError((err) => {
				console.log(err);
				return EMPTY;
			}),
		);
	}
}
