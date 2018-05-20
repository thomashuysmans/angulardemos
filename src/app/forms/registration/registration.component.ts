import { Component, OnInit, OnChanges } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit, OnChanges {

  newUser: User;

  constructor() {
   }

  submitUserRegistration(): void {
    console.log('User: ' + this.newUser);
  }

  ngOnInit() {
    console.log('in ngoninit');
    this.newUser = new User('', '', '');
  }

  onCancel(): void {
    console.log('Cancel event');
  }

   ngOnChanges() {
    console.log('in ngonchange');
  }

}
