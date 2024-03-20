import {Injectable} from '@angular/core';
import {EMPTY, Observable} from "rxjs";
import {Auth, authState, signInWithEmailAndPassword, signOut, User} from "@angular/fire/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User | null> = EMPTY;

  constructor(private auth: Auth) {
    if (auth) {
      this.user$ = authState(this.auth);
    }
  }

  login({email, password}: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }
}
