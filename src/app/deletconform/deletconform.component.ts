import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deletconform',
  templateUrl: './deletconform.component.html',
  styleUrls: ['./deletconform.component.css']
})
export class DeletconformComponent {

  @Input() item:String|undefined

  // event creation
  @Output() oncancel= new EventEmitter()

  @Output() onDelete=new EventEmitter()
  constructor(){ }

  ngOnInit(): void{}

  onCancel() {
    // start event

    this.oncancel.emit()

  }
  deleteAcc(){
    this.onDelete.emit(this.item)

  }
}
