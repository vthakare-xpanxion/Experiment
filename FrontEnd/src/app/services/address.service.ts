import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient)
  {
  }

  loadAllAddressesService(uid)
  {
    console.log("4.inside load all service");
    return this.http.get("https://localhost:5001/address/alladdress/"+uid);
  }
  loadAddressService(aid)
  {
    
    return this.http.get("https://localhost:5001/address/address/"+aid);
  }
  deleteAddressService(aid:any)
  {
    return this.http.delete("https://localhost:5001/address/delete/"+aid);
    

  }
  addAddressService(address:any)
  {
    console.log("2.inside add service");
    return this.http.post("https://localhost:5001/address/create/",address);
    

  }
  editAddressService(address:any)
  {
    console.log("inside service ed");
    return this.http.put("https://localhost:5001/address/edit/",address);
  }
}
