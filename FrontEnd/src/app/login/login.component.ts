import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private toster :ToastrService,private _service : AuthenticationService, private route : Router) { }
  
  loggedInUser
  remPassNg = true;
  ngOnInit() {
  }

  Fp()
  {
    console.log("rempass");
    this.remPassNg = false;
  }

  PassValid(queform:NgForm)
  {
    
  }
  login(user: NgForm)
  {
    this.loggedInUser = user.value
    console.log(user.value)

    this._service.login(user.value)
    
      .subscribe
      (
        res=>{
          localStorage.setItem("userId",res.id);
          localStorage.setItem("role",res.Role);
          localStorage.setItem("token",res.token);
          localStorage.setItem("firstName",res.firstName);
          if(res.Role == "admin")
          {
             console.log(res)
             console.log('Admin');
             this.route.navigate(["/AdminProducts"])
             this.toster.info("Welcome Admin");
          
          }
          if(res.Role == "customer")
          { 
            console.log(res)
            console.log("User");
            this.toster.success("Login Successfull");
            this.route.navigate(["/home"])
            

          }
          if(res.Role == "anonymous" )
          { 
            if(res.id == -2)
            {
              this.toster.error("Email Id or Password Wrong");
              console.log("id password worng")
            }
            if(res.id == -1)
            {
              this.toster.info("Please Sign Up First!");
          
            }
            
          } 
          
        },
        err=>{
          console.log("Inside err")
          console.log(err)
        }
      )
  }
 
}
