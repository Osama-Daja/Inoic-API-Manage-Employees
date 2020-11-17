import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/service.service';
import { UserProfile } from 'src/app/shared/UserProfile';

@Component({
  selector: 'app-privatehome',
  templateUrl: './privatehome.page.html',
  styleUrls: ['./privatehome.page.scss'],
})
export class PrivatehomePage implements OnInit {

  userDetails : UserProfile;
  constructor(private router : Router,private service : ServiceService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      data =>
        this.userDetails = data as UserProfile
      ,
      err =>
        console.log(err)
    );
  }

}
