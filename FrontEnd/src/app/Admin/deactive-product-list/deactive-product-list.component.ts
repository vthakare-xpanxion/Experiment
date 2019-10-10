import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { AdminProductService } from 'src/app/services/AdminServices/admin-product.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-deactive-product-list',
  templateUrl: './deactive-product-list.component.html',
  styleUrls: ['./deactive-product-list.component.css']
})
export class DeactiveProductListComponent implements OnInit {

  search;
  Products : any;
  constructor(private _auth:AuthenticationService,private toster :ToastrService, private route: Router,private _service : AdminProductService,private _cartservice: CartService,private Aroute: ActivatedRoute) { }

  ngOnInit() 
  {
    
    this._service.loaddeactiveproducts()
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


  deleteProduct(pid: any)
  {
    this._service.ActivateProduct(pid)
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
