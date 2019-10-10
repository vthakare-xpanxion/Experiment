import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
   
  cartng = false;
  Cart;
  uid;
  constructor(private _service: CartService, private route: Router, private Aroute: ActivatedRoute) { console.log("ctor");}

  ngOnInit() 
  {
    this.uid = localStorage.getItem("userId");
    console.log("inside on init CART");
   

    this._service.loadAllCartItems(this.uid)
      .subscribe
      (

        res => {
          
          this.Cart = res;
          console.log("Cart length")
          console.log(this.Cart.length)
          if(this.Cart.length != 0)
          {
            this.cartng = true;
          }
          else
          this.cartng = false
          console.log("hello",this.Cart);
          this.Cart.forEach(element => {

            element.price = element.price * element.itemQuantity;
          });

        },
        err => {

          console.log(err);
        }


      );

  }
   
  

  RemoveItem(cid: any) {
    console.log("rem" + cid);
    this._service.deleteCartItemService(cid)
      .subscribe(
        res => {
          console.log(res);
          if(this.Cart.length != 0)
          {
            this.cartng = false;
          }

          this.ngOnInit();
        },
        err => {
          console.log(err);
        });
        
        
  }
  IncItem(cid: any) {
    console.log("inc" + cid);
    this._service.incCartItemQntService(cid)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => {
          console.log(err);
        });

  }

  DecItem(cid: any) {
    console.log("dec" + cid);
    this._service.decCartItemQntService(cid)
      .subscribe(
        res => {
          console.log(res);
          // if(this.Cart.length != 0)
          // {
          //   this.cartng = false;
          // }
          this.ngOnInit();
        },
        err => {
          console.log(err);
        });

  }


}
