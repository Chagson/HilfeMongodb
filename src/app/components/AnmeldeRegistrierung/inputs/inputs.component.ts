import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  @Input() checkInput: Boolean | undefined;
  loginForm: FormGroup;
  check: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.loginForm.valid) {
      // Hier kannst du die Logik für die Formularverarbeitung implementieren
      // Zum Beispiel eine API-Anfrage an den Server senden
      console.log('Formular abgeschickt:', this.loginForm.value);
      this.check = true;
    } else {
      // Hier kannst du entsprechend reagieren, wenn das Formular ungültig ist
      console.log('Ungültiges Formular');
      this.check = true;
    }
  }



  isAnmeldenSelected: boolean = false;
  isRegistrierenSelected: boolean = false;

  selectAnmelden() {
    this.isAnmeldenSelected = false;
    this.isRegistrierenSelected = true;
    this.checkInput = true;
    console.log(this.checkInput);
   
  }

  selectRegistrieren() {
    this.isAnmeldenSelected = true;
    this.isRegistrierenSelected = false;
    this.checkInput = false;
    console.log(this.checkInput);
  }

}







