import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  Addresses;
  ngAddress = false;
  constructor(private _service : AddressService, private route : Router) { }

  ngOnInit() 
  {
    console.log("6.inside on init load all");
    this._service.loadAllAddressesService(localStorage.getItem("userId"))
    .subscribe
    (
      
        res =>
        {
          this.Addresses = res
          if(this.Addresses.length != 0)
          { this.ngAddress = true; }
          
        },
        err =>
        {
          
          console.log(err);
        }

      
    );
  }
 
 
  deleteAddress(aid: any, index)
  {
    this._service.deleteAddressService(aid)
    .subscribe(
      res =>
      {
        //this.route.navigate.
        console.log(res);
        this.Addresses.splice(index,1)
        if(this.Addresses.length==0)
          this.ngAddress = false
      },
      err =>
      {
        console.log(err);
      });

  }

}
