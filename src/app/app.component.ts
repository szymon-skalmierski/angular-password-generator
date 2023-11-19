import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-password-generator';

  passwordForm = new FormGroup({
    generatedPassword: new FormControl(''),
    options: new FormGroup({
      lowercase: new FormControl(true),
      uppercase: new FormControl(false),
      digits: new FormControl(false),
      special: new FormControl(false),
    }, [this.optionsGroupValidator()]),
    length: new FormControl(18, [Validators.min(4), Validators.max(32)]),
  });

  show() {
    console.log(this.passwordForm);
  }

  optionsGroupValidator(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const controls = (group as FormGroup).controls;
      for(let index in controls) {
        if(controls[index].value) {
          return null;
        }
      }
      return {noOptionChecked: true};
    }
  }

  generatePassword() {

  }

  changeInputType(input: HTMLInputElement) {
    input.type==='password' ? input.type='text' : input.type='password';
  }

  copyInputValue(input: HTMLInputElement) {
    navigator.clipboard.writeText(input.value);
  }
}
