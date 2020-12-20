import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardId: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dashboardId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
