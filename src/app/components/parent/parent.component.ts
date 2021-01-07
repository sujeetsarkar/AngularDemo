import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  messageFromParent = "This is the message from Parent";
  messageRecivedFromChild = "No Message";
  constructor() { }

  ngOnInit(): void {
  }

  getMessageFromChild(val){
    this.messageRecivedFromChild = val;
    console.log(val);
  }

}
