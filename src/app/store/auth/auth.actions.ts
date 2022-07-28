import { createAction, props } from "@ngrx/store";

export const login = createAction(
  '[Auth] Login',
  props<{ userName: string; passWord: string; }>()
);

export const logout = createAction('[Auth] Logout');

export const whoAmI = createAction('[Auth] WhoAmI');

export const setRedirectUrl = createAction(
  '[Auth] SetRedirectUrl',
  props<{ redirectUrl: string }>()
)
