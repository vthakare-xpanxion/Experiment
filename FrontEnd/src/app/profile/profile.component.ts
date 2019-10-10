import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  UserDetails : any;
  constructor(private _service : AuthenticationService, private route : Router) { }

  ngOnInit() 
  {
    this._service.details(localStorage.getItem("userId"))
    .subscribe
    (
      
        res =>
        {
          this.UserDetails = res

          console.log(res);
          
        },
        err =>
        {
          
          console.log(err);
        }
    );
  }

}
