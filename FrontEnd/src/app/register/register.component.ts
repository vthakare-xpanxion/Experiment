import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  secQuestions;
  constructor(private toster :ToastrService,private route:Router,private _service : AuthenticationService) { }

  ngOnInit() {


    var emas  = localStorage.getItem("email")
    this._service.getQuestions().subscribe(res => 
      {
        this.secQuestions = res;
        console.log(this.secQuestions);
      });
  }
  register(user : NgForm)
  {
    console.log("Inside register")
    console.log(user.value);
    // if(user.value.email != "" && user.value.password != "" && user.value.FirstName != "" && user.value.LastName != "" && user.value.question != "" && user.value.answer != "" && user.value.gender != "" && user.value.DateOfBirth != "" )
    // {
    // this._service.register(user.value)
    // .subscribe
    // (
    //   res =>
    //   {
    //     if(res == 4000)
    //     {
    //       this.toster.success("Try Another Email");
    //       this.toster.error("Email Id Allready Exists");
    //       this.toster.info("Cant Sign Up");
          
    //     }
    //     else
    //     {
    //     this.toster.success("Register Successfull");
    //     this.route.navigate(["/login"])
    //     }
    //   },
    //   err => 
    //   {
    //     console.log("inside err");
    //     console.log(err);
    //   }
    // );
    // }

    // else
    // {
    //   this.toster.error("please fill all the details !!");
    // }
     }

}
