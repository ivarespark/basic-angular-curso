import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {    
  }

  // Declaro propiedad
  texto_color:String = '';
  button_disabled:boolean = false;

}
