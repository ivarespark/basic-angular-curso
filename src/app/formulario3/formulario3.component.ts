import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario3',
  templateUrl: './formulario3.component.html',
  styleUrls: ['./formulario3.component.css']
})
export class Formulario3Component {

  // defino cursor para inyectar dependencia FORMBUILDER
  constructor(private fb: FormBuilder) { }

  // CRear GETTERS 
  get name(){ return this.formUser.get('name') as FormControl; }
  get email(){ return this.formUser.get('email') as FormControl; }

  formUser = this.fb.group({
    'name': ['',Validators.required],
    'email': ['',[Validators.required, Validators.email]]
  })

  procesar() {
    alert(this.formUser.get('name')?.value + ' ' + this.formUser.get('email')?.value);
  }
}
