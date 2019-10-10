import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ProductService } from '../services/product.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { ClassInfo } from '../Model/ClassInfo';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {

  user;
  loggedInUser;
  categories : object;
  constructor(private _auth:AuthenticationService,private _productsearch :SearchService,private _categoryservice : ProductService, private route : Router) { }
  
  ngOnInit() 
  {
    this._categoryservice.loadcategories().subscribe
    (res => 
      {
         this.categories = res;
        
      });
     this.user = localStorage.getItem("firstName");
    
  }
  search(tag : NgForm)
  {
    
    console.log(tag.value.ProductName);
    this.route.navigate(["/search",tag.value.ProductName])
    
  }
  
   
  login(user: NgForm)
  {
    this.loggedInUser = user.value
    console.log(user.value)

    this._auth.login(user.value)
    
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
             //this.toastr.success('Admin');
          
          }
          if(res.Role == "customer")
          { 
            console.log(res)
            console.log("User");
            this.route.navigate(["/home"])
            
           // localStorage.removeItem("email")
            //this.toastr.success('User');
          }
          if(res.Role == "anonymous" )
          { 

            console.log("Try Again Or Register")
            //this.toastr.success('Try Again Or Register');
          } 
          
        },
        err=>{
          console.log("Inside err")
          console.log(err)
        }
      )
  }

  register(user : NgForm)
  {
    console.log(user.value);
    this._auth.register(user.value)
    .subscribe
    (
      res =>
      {
        console.log("inside response");
        this.route.navigate(["/login"])
      },
      err => 
      {
        console.log("inside err");
        console.log(err);
      }
    );
     }


  logout()
  {
    localStorage.setItem("role","anonymous");
    localStorage.setItem("userId",null);
    localStorage.setItem("token",null);
    localStorage.setItem("firstName",null);
    this.route.navigate(["/home"]);

  }

}
