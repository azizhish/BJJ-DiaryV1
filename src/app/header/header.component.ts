import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toLogger() {
    this.router.navigate(['/logging', '2']);
  }
  
  toDash() {
    this.router.navigate(['/dashboard', '2']);
  }

}
