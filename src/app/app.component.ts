import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public form: FormGroup;
  // public hobbies:FormControl;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      completeName: this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required]
      }),

      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

      hobbies: this.fb.array([
        ['', [Validators.required]],
        ['', [Validators.required]]
      ]),

      username: ['', [Validators.required, this.userExists]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['']
    });

    this.form.controls.password2.setValidators([Validators.required, this.passwordsAreIquals.bind(this.form)]);
    // this.hobbies = this.form.get('hobbies') as FormControl;
  }

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }


  userExists(control: FormControl) {
    return new Promise((resolve, reject) => {
      control.value === 'strider' ?
        resolve({ exists: true }) :
        resolve(null);
    });
  }

  passwordsAreIquals() {
    if (this['controls'].password2.value !== this['controls'].password.value) {
      return { notIquals: true }
    } else {
      return false;
    }
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.hobbies);
  }

}
