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
    }, [optionsGroupValidator()]),
    length: new FormControl<number>(18, [Validators.min(4), Validators.max(32)]),
  });

  generatePassword(input: HTMLInputElement) {
    const optionsControls = (this.passwordForm.controls.options as FormGroup).controls;
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let allowedChars = '';
    let generatedPassword = '';

    if(optionsControls['lowercase'].value) allowedChars += letters;
    if(optionsControls['uppercase'].value) allowedChars += letters.toUpperCase();
    if(optionsControls['digits'].value) allowedChars += '1234567890';
    if(optionsControls['special'].value) allowedChars += '!@#$%^&*()_-+={}[]\\|:;\'"<>,.?/';

    for(let i=0; i<this.passwordForm.controls.length.value!; i++) {
      generatedPassword += allowedChars[Math.floor(Math.random()*allowedChars.length)];
    }
    
    input.value = generatedPassword;
  }

  changeInputType(input: HTMLInputElement) {
    input.type==='password' ? input.type='text' : input.type='password';
  }

  copyInputValue(input: HTMLInputElement) {
    navigator.clipboard.writeText(input.value);
  }
}

const optionsGroupValidator = (): ValidatorFn => {
  return (group: AbstractControl): ValidationErrors | null => {
    const optionsControls = (group as FormGroup).controls;
    for(let index in optionsControls) {
      if(optionsControls[index].value) {
        return null;
      }
    }
    return {noOptionChecked: true};
  }
}