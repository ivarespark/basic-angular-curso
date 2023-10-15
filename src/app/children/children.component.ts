import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  @Input()  title ?: string; // Parametro opcional

  @Output() titleChange = new EventEmitter<string>();
  // Output informa que titleChange va a ser tranbsmitido al padre

  emitTitleChange(){
    this.titleChange.emit(this.title); // transmitir al padre el title y el nuevo valor
    
  }
}
