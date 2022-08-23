import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadingService {

  statusRegistration: boolean = true;
  statusPopup: boolean = false;

  constructor() { }

  isFormRegistartion() {
    this.statusRegistration = !this.statusRegistration;
    this.statusPopup = !this.statusPopup;
  }
}
