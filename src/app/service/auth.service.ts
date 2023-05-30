import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public checkUser(userName: string, passWord: string): Observable<{ userName: string, passWord: string } | undefined> {
    if (userName === '1' && passWord === '1')
      return of({
        userName,
        passWord
      })
    return of(undefined);
  }
}
