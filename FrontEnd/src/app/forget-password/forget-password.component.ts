import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private toster :ToastrService,private _service : AuthenticationService, private route : Router) { }
  ngOnInit() {
  }

  PassValid(user: NgForm)
  {
    
    console.log(user.value)

    this._service.forgotlogin(user.value)
     .subscribe
      (
        res=>{
          
          if(res.Role != "anonymous")
          {
            localStorage.setItem("fpid",res.id); 
            this.route.navigate(["/resetpass"])
            

          }
          if(res.Role == "anonymous" )
          { 
              this.toster.error("No Email Id Found ");
            
              this.toster.info("Please Provide Correct Email Id");
          
            
            
          } 
          
        },
        err=>{
          console.log("Inside err")
          console.log(err)
        }
      )
  }

}
