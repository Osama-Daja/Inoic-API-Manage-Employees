import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServiceService } from './shared/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private service : ServiceService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  login = false;

  public appPages = [
    {
      title: 'Home',
      url: '/publichome',
      icon: 'home'
    },
    {
      title: 'login',
      url: '/login',
      icon: 'list'
    },
    {
      title: 'privatehome',
      url: '/privatehome',
      icon: 'list'
    },
    {
      title: 'employelist',
      url: '/employelist',
      icon: 'list'
    },
    {
      title: 'adminlist',
      url: '/adminlist',
      icon: 'list'
    },
    {
      title: 'inputemployee',
      url: '/inputemployee',
      icon: 'list'
    },
    {
      title: 'inputadmin',
      url: '/inputadmin',
      icon: 'list'
    },
  ];

  Update()
  {
    this.service.UpdateformModel();
    this.service.GetUsersList();
    this.service.GetEmployeeList();
    this.Clear();
  }

  LogOut()
  {
    this.Clear();
    this.service.LogIn = false;
    localStorage.removeItem('token');
    this.router.navigateByUrl('/publichome');
  }

  Clear()
  {
    this.service.id = "";
    this.service.gender = "";
    this.service.age = null;
    this.service.name = "";
    this.service.dateOfEmployment = "";
    this.service.userName = "";
    this.service.fullName = "";
    this.service.Password = "";
    this.service.Oldpassword = "";
  }
}
