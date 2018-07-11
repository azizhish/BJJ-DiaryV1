import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service'
import { UserService } from '../services/user.service'

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
    private userservice: UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      remember: false,
    })
    this.userservice.getUserWithUsername('s')
      .subscribe(dish => console.log(dish))
  }

  onSubmit() {
    console.log('we get here')
    if (this.loginForm.valid) {
      this.authservice.login(this.loginForm.value.userName, this.loginForm.value.password)
    }
    this.formSubmitAttempt = true
  }
}
