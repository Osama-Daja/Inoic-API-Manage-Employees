import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/shared/RegisterModel';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/shared/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.page.html',
  styleUrls: ['./adminlist.page.scss'],
})
export class AdminlistPage implements OnInit {

  constructor(private service : ServiceService,private router: Router) { }

  ngOnInit() {
    this.service.UpdateformModel();
    this.service.GetUsersList();
    this.service.GetEmployeeList();
    this.Clear();
  }

  populateForm(pd : RegisterModel)
  {
    this.service.id = pd.id;
    this.service.fullName = pd.fullName;
    this.service.Password = '';
    this.service.Oldpassword = '';
    this.service.userName = pd.userName;
    this.service.role = pd.role;
    this.router.navigateByUrl('/inputadmin');
  }

  onSubmit(form?:NgForm)
  {

    this.service.RegisterAdmin().subscribe(res=>
      {
        this.service.UpdateformModel();
        this.service.GetUsersList();
        this.Clear();
        this.router.navigate(['/adminlist']);
      },
      err=>{
        alert('Enter Password OR Other Password')
      })
  }

  onDelete(pd : RegisterModel)
  {
    if (confirm("Are You sure to delete this record ?"))
    {
    this.service.Delete(pd.id).subscribe(res=>
      {
        this.Clear();
        this.service.GetUsersList();
      },
      err=>{
        alert('Deleted Successfully')
      })
    }
  }

  GoToAddAdmin()
  {
    this.router.navigateByUrl('/inputadmin');
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
