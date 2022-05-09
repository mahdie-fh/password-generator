import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
public fpassword!:string

  public formGroup: FormGroup = new FormGroup({
    length: new FormControl('', [Validators.required]),
    big: new FormControl(false),
    low: new FormControl(false),
    numbs: new FormControl(false),
    symb: new FormControl(false),
  });
  get controlTitle(): FormControl {
    return this.formGroup.get('length') as FormControl;
  }
  get controlBig(): FormControl {
    return this.formGroup.get('big') as FormControl;
  }
  get controlLow(): FormControl {
    return this.formGroup.get('low') as FormControl;
  }
  get controlNumbs(): FormControl {
    return this.formGroup.get('numbs') as FormControl;
  }
  get controlSymbw(): FormControl {
    return this.formGroup.get('symb') as FormControl;
  }


  passwordGenerator(length:any, useUpper:any, useNumbers:any, userSymbols:any) {
    const lowerCharacters = 'asdfghjklzxcvbnmqwertyuiop';
    const upperCharacters = 'ASDFGHJKLZXCVBNQWERTYUIOP';
    const numbers = '123456789';
    const symbols = '!@#$%^&*';
    let passwordLength = length;
    let finalCharacters = lowerCharacters;
    let password = '';

    if (useUpper === true) {
      finalCharacters = finalCharacters.concat(upperCharacters);
    }

    if (useNumbers === true) {
      finalCharacters = finalCharacters.concat(numbers);
    }

    if (userSymbols === true) {
      finalCharacters = finalCharacters.concat(symbols);
    }
    for (var i = 0; i <= passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * finalCharacters.length);

      password += finalCharacters.substring(randomNumber, randomNumber + 1);
    }
    console.log(password);
    this.fpassword=password
  }

  create() {
    this.passwordGenerator(this.controlTitle.value, this.controlBig.value, this.controlNumbs.value, this.controlSymbw.value);
  }}
