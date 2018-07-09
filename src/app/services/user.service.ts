import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular'
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from "../../shared/user";
import { map } from '../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userScope = new BehaviorSubject<User>(null);

  constructor(private restangular: Restangular) { }

  getUserWithID(userID: number): Observable<User> {
    return this.restangular.one('users', userID).get();
  }

  getUserWithUsername(username: string): Observable<User> {
    let x = this.restangular.all('users').getList().then(data => data.filter(user => user.userName === username))[0];
    this.userScope.next(x);
    return this.userScope;
  }

  getAllUsers() {
    return this.restangular.all('users').getList();
  }

  test() {
    this.getAllUsers().subscribe()
  }



}
