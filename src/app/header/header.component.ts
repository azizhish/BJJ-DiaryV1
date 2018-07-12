import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from '../../../node_modules/rxjs'
import { User } from '../../shared/user'
import { AuthService } from '../services/auth.service'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: User
  isLoggedIn$: Observable<boolean>

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userservice: UserService,
    private authservice: AuthService
  ) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authservice.isLoggedIn

    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.userservice.getUser(parseInt(params.get('id'))))
    // ).subscribe(user => this.user = user,err => console.log(err + "why"));
    // console.log(this.user);
  }

  toLogger() {
    this.router.navigate(['/logging', '2'])
  }

  toDash() {
    this.router.navigate(['/dashboard', '2'])
  }

  logout() {
    // this.user = null;
    this.authservice.logout()
  }
}
