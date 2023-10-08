import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  dia: number = 1;

  constructor() { }

  ngOnInit(): void {
      
  }

  saltarDia(){
    if (this.dia==7){
      this.dia = 1;
    }else{
      this.dia++;
    }
  }
}
