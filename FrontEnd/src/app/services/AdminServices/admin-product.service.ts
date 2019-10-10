import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {
 

  token;
  constructor(private http:HttpClient,private route : Router)
  {
  }

  ActivateProduct(pid:any,queryParams = {})
  {
    this.token = localStorage.getItem('token');
    
    const headers = {
      headers : new HttpHeaders().set('Authorization',  "Bearer "+this.token)
     
    };
    return this.http.delete("https://localhost:5001/Admin/products/active/"+pid,{headers : headers.headers, params : queryParams});
    

  }
  loaddeactiveproducts(queryParams = {}) 
  {
    this.token = localStorage.getItem('token');
    
    const headers = {
      headers : new HttpHeaders().set('Authorization',  "Bearer "+this.token)
     
    };
    return this.http.get("https://localhost:5001/Admin/products/alldeactiveproducts",{headers : headers.headers, params : queryParams});
  }
  loadproducts(queryParams = {})
  {
    this.token = localStorage.getItem('token');
    
    const headers = {
      headers : new HttpHeaders().set('Authorization',  "Bearer "+this.token)
     
    };
    return this.http.get("https://localhost:5001/Admin/products/allproducts", {headers : headers.headers, params : queryParams});
  }

  deleteProductService(pid:any,queryParams = {})
  {
    this.token = localStorage.getItem('token');
    
    const headers = {
      headers : new HttpHeaders().set('Authorization',  "Bearer "+this.token)
     
    };
    return this.http.delete("https://localhost:5001/Admin/products/delete/"+pid,{headers : headers.headers, params : queryParams});
    

  }
  addProductService(product:any,queryParams = {})
  {
    this.token = localStorage.getItem('token');
    
    const headers = {
      headers : new HttpHeaders().set('Authorization',  "Bearer "+this.token)
     
    };
    console.log("inside add product service",product);
    
    return this.http.post("https://localhost:5001/admin/products/create",product,{headers : headers.headers, params : queryParams});
    

  }
  editProductService(product:any,queryParams = {})
  {
    this.token = localStorage.getItem('token');
    
    const headers = {
      headers : new HttpHeaders().set('Authorization',  "Bearer "+this.token)
     
    };
    console.log("inside service ed");
    return this.http.put("https://localhost:5001/admin/products/edit",product,{headers : headers.headers, params : queryParams});
    

  }
  getProductService(pid:any,queryParams = {})
  {
    this.token = localStorage.getItem('token');
    
    const headers = {
      headers : new HttpHeaders().set('Authorization',  "Bearer "+this.token)
     
    };
    return this.http.get("https://localhost:5001/Admin/products/product/"+pid,{headers : headers.headers, params : queryParams});   
  }
}
