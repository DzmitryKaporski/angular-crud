import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'customer-data';
  status: boolean = false;

  isRregistration(): void {
    this.status = !this.status
  }
}
