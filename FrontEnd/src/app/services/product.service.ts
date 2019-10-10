import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

 
  constructor(private http:HttpClient) { }

  loadproducts()
  {
    return this.http.get("https://localhost:5001/home");
  }
  loadcategories()
  {
    return this.http.get("https://localhost:5001/category");
  }

  getProductService(pid:any)
  {
    return this.http.get("https://localhost:5001/product/"+pid);   
  }




}
