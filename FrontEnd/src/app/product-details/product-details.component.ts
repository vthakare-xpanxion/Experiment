import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminProductService } from '../services/AdminServices/admin-product.service';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../services/product.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private auth : AuthenticationService,private toster :ToastrService,private _cartservice: CartService,private _service : ProductService, private route : Router,private Aroute: ActivatedRoute) { }
  pid;
  producthold : any = {}
  
  ngOnInit() 
  {
    
    this.pid = this.Aroute.snapshot.params.pid;
    this._service.getProductService(this.pid)
    .subscribe(
      res => {
        this.producthold=  res;
        console.log(this.producthold);

      },
      err => {
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
