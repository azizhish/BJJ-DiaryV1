import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { SubmissionGroup } from "../../shared/submission";
import { TapGroups } from "../../shared/tapout";
import { UserService } from '../services/user.service';
import { User } from '../../shared/user';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {


  subForm: FormGroup;
  subs;

  tapForm: FormGroup;
  taps;

  user: User;

  constructor(private submissionFB : FormBuilder, 
    private tapFB: FormBuilder,
    private route: ActivatedRoute,
    private userservice: UserService) {
    this.createForms();
  }

  createForms(): any {
    this.subForm = this.submissionFB.group({
      subName: ['', Validators.required],
      number: 1
    });
    this.tapForm = this.tapFB.group({
      tapName: ['', Validators.required],
      number: 1
    });
  }

  ngOnInit() {
    this.subs = SubmissionGroup.subs;
    this.taps = TapGroups.taps;

    //Route Params to get the User and store it as any so it remains RestAngular object
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userservice.getUser(parseInt(params.get('id'))))
    ).subscribe(user => 
      {this.user = user;
      console.log(this.user);}
    );
    
  }

  onSubmitSub(){
    console.log("Sub");
  }

  onSubmitTap(){
    console.log("Tap");
  }


}
