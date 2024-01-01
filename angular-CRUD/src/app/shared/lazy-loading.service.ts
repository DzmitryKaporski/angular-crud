import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadingService {

  statusRegistration: boolean = true;
  statusPopup: boolean = false;

  constructor() { }

  isFormRegistration() {
    this.statusRegistration = !this.statusRegistration;
    this.statusPopup = !this.statusPopup;
  }
}
