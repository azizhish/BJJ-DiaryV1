import { Component, OnInit } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '../../../node_modules/@angular/forms'
import { UserService } from '../services/user.service'
import { IUser } from '../../shared/user'
import { Submission } from '../../shared/submission'
import { Tapout } from '../../shared/tapout'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UserService) {}
  registerForm: FormGroup
  userExists: boolean
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      userName: ['', [Validators.required, Validators.minLength(6)]],
      userPass: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  checkUserName(uname: string) {
    this.userService.getUserWithUsername(uname).subscribe(user => {
      if (user === undefined) {
        return false
      }
      return true
    })
  }
  onSubmit() {
    if (this.checkUserName(this.registerForm.value.userName)) {
      this.userExists = true
    } else {
      const temp = this.registerForm.value
      const user = {
        id: -1,
        firstName: temp.firstName,
        lastName: temp.lastName,
        userName: temp.userName,
        userPass: temp.userPass,
        userSubs: [],
        userTaps: [],
      }
      this.userService.addUser(user)
    }
  }
}
