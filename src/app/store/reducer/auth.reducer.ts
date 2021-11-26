import { Action, createReducer, on } from '@ngrx/store';
import { loginPending, setUser } from '../actions/auth.actions';

export interface IAuth {
	loading: boolean;
	user: any;
}

export const initialState: IAuth = {} as IAuth;

const _authReducer = createReducer(
	initialState,
	on(loginPending, (state) => {
		return { ...state, loading: true };
	}),
	on(setUser, (state, { user }) => {
		return { ...state, user, loading: false };
	}),
);

export function authReducer(state: IAuth | undefined, action: Action) {
	return _authReducer(state, action);
}
