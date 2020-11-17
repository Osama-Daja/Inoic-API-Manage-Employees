import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputemployee',
  templateUrl: './inputemployee.page.html',
  styleUrls: ['./inputemployee.page.scss'],
})
export class InputemployeePage implements OnInit {

  Text = 'Defoult Text';
  id : string;
  UserName : string;
  Gender : string;
  Age : string;

  constructor(private service : ServiceService,private router: Router) { }

  ngOnInit() {
  }

  Return()
  {
    this.Clear();
    this.router.navigateByUrl('/employelist');
  }

  Add(form?:NgForm)
  {
    this.service.RegisterEmployee().subscribe(res=>
      {
        this.service.UpdateformModel();
        this.service.GetEmployeeList();
        this.Clear();
        this.router.navigateByUrl('/employelist');
      },
      err=>{
        alert('Create user is not enable')
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
