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

  getUserWithUsername(username: string): Observable<User> {
    return this.restangular.all('users').getList({ userName: 'shammer' })
      .pipe(map(users => users[0]))
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
