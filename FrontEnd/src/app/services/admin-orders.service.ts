import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminOrdersService {
  change(oid) 
  {
    console.log("oid => ",oid);
    return this.http.get("https://localhost:5001/Admin/orders/status/"+oid);
  }
  
  constructor(private http:HttpClient) { }

  loadOrders(status) 
  {
    return this.http.get("https://localhost:5001/Admin/orders/all/"+status);
  }

  loadOrderhistoy() 
  {
    return this.http.get("https://localhost:5001/Admin/orders/orderHistory/");
  }

  
}
