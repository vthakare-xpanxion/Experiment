import { Component, OnInit } from '@angular/core';
import { AdminProductService } from 'src/app/services/AdminServices/admin-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  path = "../../assets/Products/";
  constructor(private _service : AdminProductService, private route : Router) { }

  ngOnInit() 
  {
  }

  addProduct(product: any)
  {
    console.log(product.value);
    //console.log(product.value.path);
    product.value.path = product.value.path.replace("C:\\fakepath\\","");
    product.value.path = this.path + product.value.path ;
    console.log(product.value.path);
    console.log("../../assets/Products/rang-de-basanti_071917053932.jpg");
    
    this._service.addProductService(product.value)
    .subscribe(res =>
      {console.log(res)
      this.route.navigate(["/AdminProducts"]);  
      },err => {console.log(err)});
    
    this._service.loadproducts().subscribe();
    
   
  }
}
