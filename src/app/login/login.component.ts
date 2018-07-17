import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { MatDialog } from '../../../node_modules/@angular/material'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  formSubmitAttempt: boolean

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      remember: false,
    })
    // this.userservice.getUserWithUsername('s').subscribe(dish => console.log(dish))
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authservice
        .login(this.loginForm.value.userName, this.loginForm.value.password)
        .subscribe(userID => {
          if (userID > 0) {
            this.router.navigate(['/dashboard', userID])
          } else {
            this.formSubmitAttempt = true
          }
        })
    }
  }
}
