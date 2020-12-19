import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Login() {
    console.log('login');
    this.router.navigate(['login', { id: 'test data' }]);
    // this.router.navigate(['items'], { relativeTo: this.route });
  }

}
