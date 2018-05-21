import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-reactive',
  templateUrl: './registration-reactive.component.html'
})
export class RegistrationReactiveComponent {

 registerForm: FormGroup;

 constructor(private fb: FormBuilder) {
  // This is the short form of declaring a Form. Remember you can't use the updateOn parameter.
  //  this.registerForm = fb.group({
  //    'username': ['', [Validators.required, Validators.minLength(2)]],
  //    'email': ['', Validators.required],
  //    'password': ['', Validators.required]
  //  });

    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }, { updateOn: 'blur' });

   this.registerForm.valueChanges
      .map((value) => {
        value.username = value.username.toUpperCase();
        value.email = 'Hello, ' + value.email;
        return value;
      })
      .filter((value) => this.registerForm.valid)
      .subscribe((value) => { // We are going to see every change when the form is valid
        console.log('Value changes: ' + JSON.stringify(value));
      });
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

}
