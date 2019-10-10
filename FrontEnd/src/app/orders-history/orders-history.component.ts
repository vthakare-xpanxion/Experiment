import { Component, OnInit } from '@angular/core';
import { OrderPlaceService } from '../services/order-place.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {

  orderng = false;
  Orders;
  aid: any;
  no;
  constructor(private _service: OrderPlaceService, private route: Router, private Aroute: ActivatedRoute) { }

  ngOnInit() {
    this._service.loadOrderHistory(localStorage.getItem("userId"))
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

}
