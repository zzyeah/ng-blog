import { Action, createReducer, on } from "@ngrx/store";
import { authInfo } from "../../bean/auth/auth-info.bean";
import { login, logout, whoAmI, setRedirectUrl } from "./auth.actions";

const authState: authInfo = {
  authStatus: false,
  userName: '',
  passWord: '',
  userCode: '',
  redirectUrl: ''
}

const _authReducer = createReducer(
  authState,
  on(login, (state, { userName, passWord }) => {
    return { ...state, userName, passWord, authStatus: true };
  }),
  on(logout, () => ({ ...authState })),
  on(setRedirectUrl, (state, { redirectUrl }) => ({ ...state, redirectUrl }))
)

export function authReducer(state: authInfo | undefined, action: Action) {
  return _authReducer(state, action);
}
