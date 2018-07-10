import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators'
import { SubmissionGroup } from '../../shared/submission'
import { TapGroups } from '../../shared/tapout'
import { User } from '../../shared/user'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css'],
})
export class LoggingComponent implements OnInit {
  subForm: FormGroup
  subs

  tapForm: FormGroup
  taps
  user: User
  usercopy = null

  constructor(
    private submissionFB: FormBuilder,
    private tapFB: FormBuilder,
    private route: ActivatedRoute,
    private userservice: UserService
  ) {
    this.createForms()
  }

  createForms(): any {
    this.subForm = this.submissionFB.group({
      subName: ['', Validators.required],
      number: 1,
    })
    this.tapForm = this.tapFB.group({
      tapName: ['', Validators.required],
      number: 1,
    })
  }

  ngOnInit() {
    this.subs = SubmissionGroup.subs
    this.taps = TapGroups.taps

    // Route Params to get the User and store it as any so it remains RestAngular object
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          // tslint:disable-next-line:radix
          this.userservice.getUserWithID(parseInt(params.get('id')))
        )
      )
      .subscribe(user => {
        this.usercopy = user
      })
  }

  onSubmitSub() {
    const date = new Date()
    const temp = this.subForm.value.subName
    const sub = {
      subName: temp,
      date: date,
    }
    let counter = this.subForm.value.number
    while (counter > 0) {
      this.usercopy.userSubs.push(sub)
      this.usercopy.save().subscribe(user => {
        this.user = user
      })
      counter--
    }
    this.subForm.reset()
    this.subForm.markAsUntouched()
  }

  onSubmitTap() {
    const date = new Date()
    const temp = this.tapForm.value.tapName
    const tap = {
      tapName: temp,
      date: date,
    }
    let counter = this.tapForm.value.number
    while (counter > 0) {
      this.usercopy.userTaps.push(tap)
      this.usercopy.save().subscribe(user => {
        this.user = user
      })
      counter--
    }
    this.tapForm.reset()
    this.tapForm.markAsUntouched()
  }
}
