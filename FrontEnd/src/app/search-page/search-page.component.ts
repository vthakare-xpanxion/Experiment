import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';
import { CartService } from '../services/cart.service';
import { query } from '@angular/animations';
import { debug } from 'util';
import { AdminProductService } from '../services/AdminServices/admin-product.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  forresult;
  catsearch;
  search;
  Products: any;
  constructor(private auth : AuthenticationService,private _ad : AdminProductService,private route: Router, private _service: SearchService, private _cartservice: CartService, private Aroute: ActivatedRoute) { }


  ngOnInit() 
  {
    this.Aroute.params.subscribe(
          params => {
            this.catsearch = params['cattag'];
            this.search = params['tag'];
            this.method();
          });

    
  }

  method() {
    
    this.catsearch = this.Aroute.snapshot.params.cattag;
    this.search = this.Aroute.snapshot.params.tag;
    console.log("seacr => " + this.search);
    console.log("catseacr => " + this.catsearch);
    console.log("main call");

    if (this.search) {
      this.forresult = this.search;
      console.log("pro call");
      this._service.loadproducts(this.search)
        .subscribe
        (
          res => {
            this.Products = res
            console.log(res);

          },
          err => {

            console.log(err);
          }
        );
    }


    if (this.catsearch) {
      this.forresult = this.catsearch;
      console.log("cat call");
      this._service.loadcatproducts(this.catsearch)
        .subscribe
        (
          res => {
            this.Products = res
            console.log(res);
            //this.ngOnInit();
          },
          err => {

            console.log(err);
          }
        );
    }
  }

  AddToCart(pid) {
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

  deleteProduct(pid: any)
  {
    this._ad.deleteProductService(pid)
    .subscribe(
      res =>
      {
        //this.route.navigate.
        console.log(res);
        this.ngOnInit();
      },
      err =>
      {
        console.log(err);
      });

  }

}
