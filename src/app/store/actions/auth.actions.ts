import { createAction, props } from '@ngrx/store';

export const checkJWT = createAction('[Auth] check JWT');
export const logOut = createAction('[Auth] log out');
export const authFail = createAction('[Auth] auth fail');
export const loginPending = createAction(
	'[Auth] login pending',
	props<{ user: { username: string; password: string } }>(),
);

export const signUpPending = createAction(
	'[Auth] sign up pending',
	props<{
		user: {
			username: string;
			male: boolean;
			emails: string[];
			passwords: { password: string; cpassword: string };
		};
	}>(),
);

export const setUser = createAction('[Auth] set user', props<{ user: any }>());
