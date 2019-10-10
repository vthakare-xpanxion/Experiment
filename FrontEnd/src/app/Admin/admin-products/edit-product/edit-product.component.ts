import { Component, OnInit } from '@angular/core';
import { AdminProductService } from 'src/app/services/AdminServices/admin-product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  pid;
  path = "../../assets/Products/";
  constructor(private _service : AdminProductService, private route : Router,private Aroute: ActivatedRoute) { }

  producthold;
  
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

  editProduct(product: any)
  {
    
    
    product.value.path = product.value.path.replace("C:\\fakepath\\","");
    product.value.path = this.path + product.value.path ;
    product.value.productId = this.pid;
    
    this._service.editProductService(product.value)
    .subscribe(res =>{
      console.log(res)
      this.route.navigate(["/AdminProducts"]);
      
    },err => {console.log(err)});

    this._service.loadproducts().subscribe();
    
    
  }

}
