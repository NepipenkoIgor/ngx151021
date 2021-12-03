import { authReducer, IAuth } from './reducer/auth.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { IRouterState } from './reducer/router.reducer';
import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { logOut } from './actions/auth.actions';

export interface IAppState {
	auth: IAuth;
	router: RouterReducerState<IRouterState>;
}

export const reducers = {
	auth: authReducer,
	router: routerReducer,
};

export function logoutAndClearState(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
	return (state: IAppState | undefined, action: Action): IAppState => {
		let newState = state;
		if (action.type === logOut().type) {
			newState = undefined;
		}
		return reducer(newState, action);
	};
}

export const metaReducers: MetaReducer<IAppState>[] = [logoutAndClearState];
