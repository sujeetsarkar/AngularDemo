import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus = "No Server Was Created";
  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = "Server Was Created";
  }

  ngOnInit(): void {
  }

}
