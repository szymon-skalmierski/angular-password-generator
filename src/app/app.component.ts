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
      'lowercase': new FormControl(true),
      'uppercase': new FormControl(false),
      'digits': new FormControl(false),
      'special': new FormControl(false)
    }),
    length: new FormControl(18)
  });

  show() {
    console.log(this.passwordForm)
  }
}
