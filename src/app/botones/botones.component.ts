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

  src: string = 'https://images.pexels.com/photos/17411073/pexels-photo-17411073/free-photo-of-blanco-y-negro-planta-trigo-enfoque-selectivo.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load';

}
