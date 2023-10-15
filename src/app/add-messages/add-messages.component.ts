import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-add-messages',
  templateUrl: './add-messages.component.html',
  styleUrls: ['./add-messages.component.css']
})

export class AddMessagesComponent {

  // inyectar el servicio importado
  constructor(public messagesService: MessagesService) { }

  newMessage : string = ""; // inicializo valor por defecto (vacio)

  addMessage(){
    this.messagesService.add(this.newMessage); // llamo a metodo add del servicio importado
    this.newMessage = "";
  }

}
