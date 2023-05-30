import { authInfo } from "../auth/auth-info.bean";

export interface AppState {
  auth: Readonly<authInfo>
}
