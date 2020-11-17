import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../shared/EmployeeModel';
import { ServiceService } from '../../shared/service.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.page.html',
  styleUrls: ['./employelist.page.scss'],
})
export class EmployelistPage implements OnInit {

  constructor(private service : ServiceService,private router: Router) { }

  ngOnInit() {
    this.Clear();
    this.service.UpdateformModel();
    this.service.GetEmployeeList();
    this.service.GetUsersList();
  }

  populateForm(pd : EmployeeModel)
  {
    this.service.id = pd.id;
    this.service.name = pd.name;
    this.service.age = pd.age;
    this.service.gender = pd.gender;
    this.service.dateOfEmployment = pd.dateOfEmployment;
    this.router.navigate(['/inputemployee']);
  }

  onDelete(pd : EmployeeModel)
  {
    if (confirm("Are You sure to delete this record ?"))
    {
    this.service.DeleteEmployee(pd.id).subscribe(res=>
      {
        this.service.GetEmployeeList();
      },
      err=>{
        alert('Deleted Successfully')
      })
    }
  }

  Add(form?:NgForm)
  {
    this.service.RegisterEmployee().subscribe(res=>
      {
        this.service.UpdateformModel();
        this.service.GetEmployeeList();
      },
      err=>{
        alert('Create user is not enable')
      })
}

SearchButton()
{
  this.service.SearchEmployee();
}

  GoToInputEmployee()
  {
    this.Clear();
    this.router.navigateByUrl('/inputemployee');
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
