import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  private loggedIn = new BehaviorSubject<boolean>(false)

  login(username: string, password: string) {
    if (username !== '' && password !== '') {
      this.loggedIn.next(true)
      this.router.navigate(['/dashboard', '2'])
    }
  }

  logout() {
    this.loggedIn.next(false)
    this.router.navigate(['/login'])
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable()
  }
}
