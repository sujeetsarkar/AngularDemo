import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string;
  @Output() newMessageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendNewMessage(value: string){
    this.newMessageEvent.emit(value);
  }

}
