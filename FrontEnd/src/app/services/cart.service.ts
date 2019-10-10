import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient)
  {
  }

  loadAllCartItems(uid)
  {
    console.log("Inside Load All Cart Items Service");
    return this.http.get("https://localhost:5001/cart/AllCartItems/"+uid);
  }
  AddToCart(uid,pid)
  {
    console.log("Inside add to Cart Service");
    return this.http.get("https://localhost:5001/cart/AddToCart/"+uid+"/"+pid);
  }
  incCartItemQntService(cid)
  {
    console.log("Inside inc Cart Items Service");
    return this.http.get("https://localhost:5001/cart/incquantity/"+cid);
  }
  decCartItemQntService(aid)
  {
    console.log("Inside dec Cart Items Service");
    return this.http.get("https://localhost:5001/cart/decquantity/"+aid);
  }
  deleteCartItemService(cid:any)
  {
    console.log("Inside remove Cart Item Service");
    return this.http.get("https://localhost:5001/cart/remove/"+cid);
  
  }
  
}
