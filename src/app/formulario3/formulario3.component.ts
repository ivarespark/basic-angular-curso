import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  // CRear GETTERS 
  get name(){ return this.formUser.get('name') as FormControl; }
  get email(){ return this.formUser.get('email') as FormControl; }

  formUser = new FormGroup({
    'name': new FormControl('',Validators.required),
    'email': new FormControl('',[Validators.required, Validators.email])
  });

  procesar() {
    alert(this.formUser.get('name')?.value + ' ' + this.formUser.get('email')?.value);
  }
}
