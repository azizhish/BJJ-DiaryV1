import { Component, OnInit } from '@angular/core';
import { User } from "../../shared/user";
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private user: User;
  private favoriteSub: string;

  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.userservice.getUser(2) //Hard coded the userID for now
      .subscribe(res => {
        this.user = res;
        this.favoriteSub = this.user.getFavoriteSub();
  });
    
  }

}
