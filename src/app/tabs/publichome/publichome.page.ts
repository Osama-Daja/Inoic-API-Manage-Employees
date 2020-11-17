import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publichome',
  templateUrl: './publichome.page.html',
  styleUrls: ['./publichome.page.scss'],
})
export class PublichomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  GoToLogIn()
  {
    //this.router.navigate(['/tabs/login']);
    this.router.navigateByUrl('/login');
  }

  GoToHome()
  {
    this.router.navigateByUrl('/privatehome');
  }

}
