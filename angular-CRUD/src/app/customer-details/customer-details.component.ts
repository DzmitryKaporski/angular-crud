import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { HttpService } from '../shared/http.service';

@Component({
    selector: 'app-customer-details',
    templateUrl: './customer-details.component.html',
    styleUrls: ['./customer-details.component.scss'],
    standalone: false
})
export class CustomerDetailsComponent implements OnInit {

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.pattern(/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,3})$/)]],
    mobile: ['', [Validators.required, Validators.pattern(/^^\+375(\s+)?\(?(17|25|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/)]],
    location: ['', [Validators.required, Validators.min(18)]],
  })

  constructor(private httpService: HttpService, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.createControls();
  }

  onSubmit(): void {
    this.httpService.createData(this.form.value);
    this.createControls();
  }

  private createControls(): void {
    this.form.controls['name'].setValue('');
    this.form.controls['email'].setValue('');
    this.form.controls['mobile'].setValue('');
    this.form.controls['location'].setValue('');
  }

}
