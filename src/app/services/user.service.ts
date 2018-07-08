import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular'
import { Observable } from 'rxjs';
import { User } from "../../shared/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private restangular: Restangular) { }

  getUser(userID: number): Observable<User> {
    return this.restangular.one('users', userID).get();
  }

}
