import { createSelector } from "@ngrx/store";
import { authInfo } from "app/bean/auth/auth-info.bean";
import { AppState } from "app/bean/store/app.state";

export const selectAuthInfo=  createSelector(
  (state: AppState) => state.auth,
  (auth: authInfo) => auth
);
