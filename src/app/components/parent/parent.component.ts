import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  messageFromParent = "This is the message from Parent";
  constructor() { }

  ngOnInit(): void {
  }

}
