import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderPlaceService } from '../services/order-place.service';

@Component({
  selector: 'app-place-an-order',
  templateUrl: './place-an-order.component.html',
  styleUrls: ['./place-an-order.component.css']
})
export class PlaceAnOrderComponent implements OnInit {

  orderng = false;
  Orders;
  aid: any;
  constructor(private _service: OrderPlaceService, private route: Router, private Aroute: ActivatedRoute) { }

  ngOnInit() {
    this._service.loadOrders(localStorage.getItem("userId"))
      .subscribe
      (
        res => {
          this.Orders = res;
          if(this.Orders.length != 0)
          {
            this.orderng = true;
          }
          else
          this.orderng = false
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }

  RemoveItem(oid)
  {
console.log("this is =>",oid);
    this._service.removeOrders(oid)
      .subscribe
      (
        res => {
          
          if(this.Orders.length != 0)
          {
            this.orderng = true;
          }
          else
          this.orderng = false
          console.log(res);
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      );

  }

}
