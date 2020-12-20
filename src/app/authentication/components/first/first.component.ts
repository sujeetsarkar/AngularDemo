import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  childA() {
    this.router.navigate(['child-a'], { relativeTo: this.route });
  }

  
  childB() {
    this.router.navigate(['child-b'], { relativeTo: this.route });
  }

}
