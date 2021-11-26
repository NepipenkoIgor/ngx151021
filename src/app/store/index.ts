import { authReducer, IAuth } from './reducer/auth.reducer';

export interface IAppState {
	auth: IAuth;
}

export const reducers = {
	auth: authReducer,
};
