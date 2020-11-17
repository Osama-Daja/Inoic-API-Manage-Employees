import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formModel = {
    UserName : '',
    Password : ''
  };

  disabled : false;
  
  constructor(private service:ServiceService, private router : Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
    {
      this.router.navigate(['/privatehome']);
    }
  }
//  this.router.navigateByUrl('/tabs/privatehome');

  onSubmit() {
    this.service.login().subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/privatehome']);
        this.service.LogIn = true;
      },
      err => {
        if (err.status == 400)
          alert('Incorrect username or password.');
        else
          console.log(err);
      }
    );
  }

  GoToLogIn()
  {
    //this.router.navigate(['/tabs/login']);
    this.router.navigateByUrl('/login');
  }

  GoToHome()
  {
    this.router.navigateByUrl('/publichome');
  }
}
