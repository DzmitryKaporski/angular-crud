import { Component, OnInit } from '@angular/core';

import { LazyLoadingService } from './../shared/lazy-loading.service';

@Component({
    selector: 'app-customers-host',
    templateUrl: './customers-host.component.html',
    styleUrls: ['./customers-host.component.scss'],
    standalone: false
})
export class CustomersHostComponent implements OnInit {

  constructor(public sll: LazyLoadingService) { }

  ngOnInit(): void {
  }

  isFormRegistartion() {
    this.sll.statusRegistration = !this.sll.statusRegistration;
    this.sll.statusPopup = !this.sll.statusPopup;
  }

}
