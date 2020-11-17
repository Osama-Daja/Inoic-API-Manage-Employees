import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputadmin',
  templateUrl: './inputadmin.page.html',
  styleUrls: ['./inputadmin.page.scss'],
})
export class InputadminPage implements OnInit {

  constructor(private service : ServiceService,private router: Router) { }

  ngOnInit() {
    this.service.UpdateformModel();
    this.service.GetUsersList();
    this.Clear();
  }

  Return()
  {
    this.Clear();
    this.router.navigateByUrl('/adminlist');
  }

  onSubmit(form?:NgForm)
  {

    this.service.RegisterAdmin().subscribe(res=>
      {
        this.service.UpdateformModel();
        this.service.GetUsersList();
        this.Return();
      },
      err=>{
        alert('Enter Password OR Other Password')
      })
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
