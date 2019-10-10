import { Component, OnInit } from '@angular/core';
import { AdminProductService } from '../../services/AdminServices/admin-product.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  Products : Object ;
  constructor(private _auth:AuthenticationService,private _service : AdminProductService, private route : Router) { }

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
 
 
  deleteProduct(pid: any)
  {
    this._service.deleteProductService(pid)
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
