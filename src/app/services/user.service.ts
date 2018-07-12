import { Injectable } from '@angular/core'
import { Restangular } from 'ngx-restangular'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from '../../../node_modules/rxjs/operators'
import { User } from '../../shared/user'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userScope = new BehaviorSubject<User>(null)
  users: User[]
  constructor(private restangular: Restangular) {}
  /* The getUserWithID Function assumes that UserID are unique
within the Database  */
  getUserWithID(userID: number): Observable<User> {
    return this.restangular.one('users', userID).get()
  }
  /* The getUserWithUsername Function assumes that User Names are unique
within the Database  */
  getUserWithUsername(userName: string): Observable<User> {
    return this.restangular
      .all('users')
      .getList({ userName: userName })
      .pipe(map(users => users[0]))
  }

  getAllUsers(): Observable<User[]> {
    return this.restangular.all('users').getList()
  }
}
