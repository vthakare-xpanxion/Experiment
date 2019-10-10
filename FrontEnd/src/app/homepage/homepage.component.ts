import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {

  search;
  Products : any;
  constructor(private toster :ToastrService, private route: Router,private _service : ProductService,private _cartservice: CartService,private Aroute: ActivatedRoute) { }

  ngOnInit() 
  {
    
    this._service.loadproducts()
    .subscribe
    (
      
        res =>
        {
          this.Products = res
          console.log(res);
          
        },
        err =>
        {
          
          console.log(err);
        }

      
    );
  }



  AddToCart(pid)
  {
    if(localStorage.getItem("role") == "anonymous")
    {
      
      this.toster.info("Please Signin To Proceed");
      
      this.route.navigate(["/login"])
      
    }

    else
    {
    this._cartservice.AddToCart(localStorage.getItem("userId"), pid)
    .subscribe
    (
    res => {
      //this.pid = undefined;
        console.log(res);
        this.route.navigate(["/addtocart"])

            },
      err => {

        console.log(err);
            }


            );


           }
    }

}
