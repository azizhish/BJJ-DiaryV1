import { Injectable } from '@angular/core'
import { Restangular } from 'ngx-restangular'
import { BehaviorSubject, Observable } from 'rxjs'
import { User } from '../../shared/user'
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userScope = new BehaviorSubject<User>(null)
  users: User[]
  constructor(private restangular: Restangular) {}

  getUserWithID(userID: number): Observable<User> {
    return this.restangular.one('users', userID).get()
  }

<<<<<<< HEAD
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
=======
  getUserWithUsername(username: string): Observable<User> {
    return this.restangular.all('users').getList({ userName: 'shammer' })
      .pipe(map(users => users[0]))
>>>>>>> 139a53180d66d89e67c181ab3ee17c7962b7d1b5
  }

  filterByUser(userName: string) {
    this.getAllUsers().subscribe(data => {
      this.users = data
      console.log(this.users[0]);
    }
    )
  }

  getAllUsers(): Observable<User[]>{
    return this.restangular.all('users').getList()
  }
}
