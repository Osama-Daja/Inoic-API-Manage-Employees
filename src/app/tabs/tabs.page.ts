import { Component } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private router : Router,private service : ServiceService) {}

  onLogout()
  {
    this.Clear();
    localStorage.removeItem('token');
    this.router.navigate(['/tabs/publichome']);
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
