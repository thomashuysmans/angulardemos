import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-reactive',
  templateUrl: './registration-reactive.component.html',
  styleUrls: ['./registration-reactive.component.css']
})
export class RegistrationReactiveComponent implements OnChanges {

 registerForm: FormGroup;

 constructor(private fb: FormBuilder) {
   this.registerForm = fb.group({
     "username": ["test", [Validators.required, Validators.minLength(2)] ],
     "email": ["", Validators.required],
     "password": ["", Validators.required]
   });


   this.registerForm.valueChanges
      .map((value) => {
        value.username = value.username.toUpperCase();
        value.email = "Hello, " + value.email;
        return value;
      })
      .filter((value) => this.registerForm.valid)
      .subscribe((value) => { //We are going to see every change when the form is valid
        console.log("Value changes: " + JSON.stringify(value));
      })
  }

  ngOnChanges(){
    console.log("in ngonchange");
  }

  onSubmit() {
    console.log(this.registerForm);
  }

}
