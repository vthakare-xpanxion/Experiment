import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderPlaceService {
  
  removeOrders(oid: any) 
  {
    return this.http.get("https://localhost:5001/order/remove/"+oid);   
  }
  

  constructor(private http:HttpClient) { }
  
  loadOrderHistory(uid) {
    return this.http.get("https://localhost:5001/order/orderHistory/"+uid); 
  }


  loadOrders(uid)
  {
    console.log("Inside Load All order Items Service");
    return this.http.get("https://localhost:5001/order/currentorders/"+uid);
  }
  AddOrder(uid,address)
  {
    console.log("Inside add to Cart Service");
    return this.http.post("https://localhost:5001/order/PlaceOrder/"+uid,address);
  }
}
