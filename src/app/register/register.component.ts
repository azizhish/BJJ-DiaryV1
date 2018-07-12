import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  registerForm: FormGroup

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: '',
      lastName: '',
      userName: '',
      userPass: '',
    })
  }

  onSubmit() {}
}
