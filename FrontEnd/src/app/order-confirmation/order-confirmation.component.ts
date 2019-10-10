import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';
import { Router } from '@angular/router';
import { OrderPlaceService } from '../services/order-place.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  ngAddress = false;
  Addresses;
  data;
  constructor(private _service: AddressService, private _OPservice: OrderPlaceService, private route: Router) { }

  ngOnInit() {

    this._service.loadAllAddressesService(localStorage.getItem("userId"))
      .subscribe
      (

        res => {
          this.Addresses = res
          if(this.Addresses.length != 0)
          { this.ngAddress = true; }
          console.log(this.Addresses);
        },
        err => {

          console.log(err);
        }


      );
  }

  PlaceOrder(aid) {
    this._service.loadAddressService(aid)
      .subscribe(
        res => {
          this.data = res;
          this._OPservice.AddOrder(localStorage.getItem("userId"), this.data).subscribe(
            res => {
              console.log(this.data.city)
              this.route.navigate(["/currentOrders"])
            },
            err => {
              console.log(err);
            }
          );
        });
  }
}
