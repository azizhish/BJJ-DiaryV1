import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { User } from '../../shared/user'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: User
  favoriteSub: string
  numberOfSubs: number
  numberOfTaps: number

  constructor(private userservice: UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          // tslint:disable-next-line:radix
          this.userservice.getUserWithID(parseInt(params.get('id')))
        )
      )
      .subscribe(user => {
        this.user = new User(
          user.id,
          user.firstName,
          user.lastName,
          user.userName,
          user.userPass,
          user.userSubs,
          user.userTaps
        )
        this.favoriteSub = this.user.getFavoriteSub()
        this.numberOfSubs = this.user.userSubs.length
        this.numberOfTaps = this.user.userTaps.length
      })
  }
}
