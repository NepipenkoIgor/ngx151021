import { createAction, props } from '@ngrx/store';
import { IRouterPayload } from '../reducer/router.reducer';

export const go = createAction('[Router] go', props<{ params: IRouterPayload }>());
export const back = createAction('[Auth] log out');
export const forward = createAction('[Auth] auth fail');
