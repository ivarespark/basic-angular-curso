import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // muestra un archivo
  //template: '<h2>Curso de angular</h2>', // muesta codigo HTML directamente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso de Angular';
}
