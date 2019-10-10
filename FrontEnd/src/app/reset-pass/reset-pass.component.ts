import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {

  constructor(private toster :ToastrService,private _pro : ProfileService,private _service : AuthenticationService, private route : Router) { }
  secng = false;
  sec;
  ans;
  que;
  userhold : any;
  secQuestions;
  ngOnInit()
  {
  
    this._service.ans({userId:localStorage.getItem("fpid")}).subscribe(
      res => {
        this.sec = res;
        this.que = this.sec.que;
        this.ans = this.sec.ans;
       
             }
     );
     
     this._service.details(localStorage.getItem("fpid"))
     .subscribe
     (
       
         res =>
         {
           this.userhold = res
 
           console.log(res);
           
         },
         err =>
         {
           
           console.log(err);
         }
     );

     this._service.getQuestions().subscribe(res => 
      {
        this.secQuestions = res;
        console.log(this.secQuestions);
      });
   
    
   
  }

  toreset(ans:NgForm)
  {
    if(ans.value.answer == this.ans)
    {
      this.secng = true;
      
    }
    else
    {
      this.toster.info("wrong ans");
    }
    

  }

  changed(user:NgForm)
  {


    user.value.userId = localStorage.getItem("fpid");
      
    this._pro.editProfileService(user.value)
    .subscribe(res =>{
      console.log(res)
      if(res == 4000)
        {
          this.toster.success("Try Another Email");
          this.toster.error("Email Id Allready Exists");
          this.toster.info("Cant Sign Up");
          
        }
      else
      {
      this.route.navigate(["/login"]); 
      this.toster.info("successfully reset"); 
      localStorage.setItem("fpid",null);
      }    
    },err => {console.log(err)});

  }

}
