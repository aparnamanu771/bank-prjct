import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deletconform',
  templateUrl: './deletconform.component.html',
  styleUrls: ['./deletconform.component.css']
})
export class DeletconformComponent {

  @Input() item:String|undefined

  constructor(){ }

  ngOnInit(): void{}
}
