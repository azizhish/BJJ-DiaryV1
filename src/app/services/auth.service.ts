import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from '../../shared/user'
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private userService: UserService) {}

  private loggedIn = new BehaviorSubject<boolean>(false)
  private userID = new BehaviorSubject<number>(0)

  /* Called by Login Component to authenticate a User  */
  login(userName: string, password: string): Observable<number> {
    let user: User
    this.userService.getUserWithUsername(userName).subscribe(data => {
      user = data
      if (user !== undefined && user.userPass === password) {
        this.loggedIn.next(true)
        this.userID.next(user.id)
      }
    })
    return this.userID.asObservable()
  }

  logout() {
    this.loggedIn.next(false)
    this.userID.next(0)
    this.router.navigate(['/login'])
  }

  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable()
  }
}
