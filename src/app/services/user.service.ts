import { Injectable } from '@angular/core'
import { Restangular } from 'ngx-restangular'
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from '../../shared/user'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userScope = new BehaviorSubject<User>(null)

  constructor(private restangular: Restangular) {}

  getUserWithID(userID: number): Observable<User> {
    return this.restangular.one('users', userID).get()
  }

  // getUserWithUsername(username: string): Observable<User> {
  //   return this.restangular.all('users', username).getList()
  //     .pipe(map(data => console.log(data.userName))
  // }

  filterByUser(userName: string): Observable<boolean> {
    return (
      this.getAllUsers().subscribe(data =>
        data.filter(user => user.userName === userName)
      ).length === 1
    ).asObservable
  }

  getAllUsers() {
    return this.restangular.all('users').getList()
  }

  test() {
    this.getAllUsers().subscribe()
  }
}
