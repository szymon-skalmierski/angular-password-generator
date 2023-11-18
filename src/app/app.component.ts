import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-password-generator';

  passwordForm = new FormGroup({
    generatedPassword: new FormControl(''),
    options: new FormGroup({
      'lowercase': new FormControl(''),
      'uppercase': new FormControl(''),
      'digits': new FormControl(''),
      'special': new FormControl('')
    }),
    length: new FormControl('')
  });

  show() {
    console.log(this.passwordForm)
  }
}
