import { Component} from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent {

  nombre = "Ivan";
  apellido:String = "Espinosa"; // declaro tipo de variable String

  // Declaro objeto de tipo Persona(interface)
  persona:Persona = {
    nombre: "Ivan",
    apellido: "Espinosa",
    edad: 34
  }
}