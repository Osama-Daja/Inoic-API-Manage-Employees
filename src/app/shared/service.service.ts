import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterModel } from './RegisterModel';
import { EmployeeModel } from './EmployeeModel';
import { RolesModel } from './RolesModel';
import { Validators, NgModel, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  LogIn : boolean;

  //Employee
  id : string;
  name : string;
  age : number;
  gender : string;
  dateOfEmployment : string;

  //Registration
  fullName: string;
  userName: string;
  Password: string;
  role : string;
  Oldpassword : string;

  LogInUserName : string;
  LogInPassword : string;

  URL = 'http://osamadj-001-site1.itempurl.com/api/';
//  URL = 'http://localhost:59458/api/';

  Employeelist: EmployeeModel[];

  SearchNameEmployee : string;
  SearchGenderEmployee : string;

  listroles: RolesModel[];
  list: RegisterModel[];

  formModel = this.fb.group({
    UserName: ['', Validators.required , NgModel],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    })
  });

  constructor(private fb : FormBuilder,private http:HttpClient) { }


  UpdateformModel()
  {
    this.id = '';
    this.fullName = '';
    this.userName = '';
    this.Password = '';
    this.name = '';
    this.gender = '';
    this.age = null;
    this.dateOfEmployment = '';
    this.SearchGenderEmployee = '';
    this.SearchNameEmployee = '';
  }

  GetEmployeeList()
  {
      return this.http.get(this.URL + 'EmployeesAPI')
      .toPromise()
      .then(
        res=> this.Employeelist = res as EmployeeModel[]
      );
  }

  DeleteEmployee(id : string)
  {
    return this.http.delete(this.URL+'EmployeesAPI/'+id)
  }

  RegisterEmployee(){
    var body = {
      id : this.id,
      Name: this.name,
      age: this.age,
      Gender: this.gender,
      DateOfEmployment : this.dateOfEmployment
    };
    return this.http.post(this.URL + 'EmployeesAPI', body);
  }

  SearchEmployee() {

    if (this.SearchGenderEmployee == "All") {this.SearchGenderEmployee = "";}
    var body = {
      id : this.id,
      Name: this.SearchNameEmployee,
      Age: "",
      Gender: this.SearchGenderEmployee,
      DateOfEmployment : this.dateOfEmployment
    };

    return this.http.post(this.URL + 'EmployeesAPI/SearchEmployee', body).subscribe(
      data =>
        this.Employeelist = data as EmployeeModel[]
    );
  }

  Delete(id : string)
  {
    return this.http.delete(this.URL+'AccountAPI/'+id)
  }

  GetUsersList()
  {
      return this.http.get(this.URL + 'AccountAPI/GetUserAll')
      .toPromise()
      .then(
        res=> this.list = res as RegisterModel[]
        );
  }

  RegisterAdmin(){
    var body = {
      Id : this.id,
      UserName: this.userName,
      FullName: this.fullName,
      Password: this.Password,
      Oldpassword: this.Oldpassword,
      Role : this.role
    };
    return this.http.post(this.URL + 'AccountAPI/RegisterUser', body);
  }

  login() {
    var body =
    {
      UserName : this.LogInUserName,
      Password : this.LogInPassword
    }

    return this.http.post(this.URL + 'AccountAPI/Login', body);
  }

  getUserProfile() {
    var tockenheader = new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('token')});
    console.log(localStorage.getItem('token'));
    return this.http.get(this.URL + 'AccountAPI/GetUserProfile');
  }

  roleMatch(allowedRoles): Boolean{
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var UserRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (UserRole == element)
      {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
