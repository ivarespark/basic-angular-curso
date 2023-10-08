import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  personas: Persona[] = [
    { nombre: 'Juan', apellido: 'Perez', edad: 25 },
    { nombre: 'Maria', apellido: 'Garcia', edad: 30 },
    { nombre: 'Jose', apellido: 'Lopez', edad: 35 },
    { nombre: 'Pedro', apellido: 'Garcia', edad: 40 }
  ]; // array de elementos de tipo Persona

  constructor() { }

  ngOnInit(): void {
      
  }

}
