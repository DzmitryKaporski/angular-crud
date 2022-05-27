import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../shared/user';

@Component({
  selector: 'app-form-registration',
  templateUrl: './form-registration.component.html',
  styleUrls: ['./form-registration.component.scss']
})
export class FormRegistrationComponent implements OnInit {
  typePassword: string = 'password';
  messageForPassword: string = 'Show password';
  statusRegistration: boolean = true;
  statusPopup: boolean = false;
  userName: string = '';

  userForm!: FormGroup
  roles: string[] = ['Guest', 'Moderator', 'Admin'];
  user: User = new User(1, null, null, null);

  formLabels = {
    name: "Name",
    password: "Show password",
    email: "E-mail",
  }

  formPlaceholder = {
    name: "",
    password: "",
    email: "",
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.createControls();
  }

  private buildForm(): void {
    this.userForm = this.formBuilder.group({
      name: [this.user.name, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      password: [this.user.password, [Validators.required, Validators.minLength(8)]],
      email: [this.user.email, [Validators.required, Validators.pattern(/^[A-Za-z0-9][A-Za-z0-9\.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$/)]],
    })
  }

  onSubmit(): void {
    console.log(this.userForm.value);
    this.userName = this.userForm.value.name;
    this.createControls();
  }

  private createControls(): void {
    this.userForm.controls['name'].setValue('');
    this.userForm.controls['password'].setValue('');
    this.userForm.controls['email'].setValue('');
  }

  showHidePassword(): void {
    this.typePassword === 'password' ? this.typePassword = 'text' : this.typePassword = 'password';
    this.formLabels.password === 'Hide password' ? this.formLabels.password = 'Show password' : this.formLabels.password = 'Hide password';
  }

  isFormRegistartion() {
    this.statusRegistration = !this.statusRegistration;
    this.statusPopup = !this.statusPopup;
  }
}
