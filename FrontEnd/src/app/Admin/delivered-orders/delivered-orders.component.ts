import { Component, OnInit } from '@angular/core';
import { AdminOrdersService } from 'src/app/services/admin-orders.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivered-orders',
  templateUrl: './delivered-orders.component.html',
  styleUrls: ['./delivered-orders.component.css']
})
export class DeliveredOrdersComponent implements OnInit {

  orderng = false;
  Orders;
  aid: any;
  constructor(private _service: AdminOrdersService, private route: Router, private Aroute: ActivatedRoute) { }

  ngOnInit() 
  {
    this._service.loadOrderhistoy()
      .subscribe
      (
        res => {
                 this.Orders = res;
          
              },
        err => {
                 console.log(err);
                }
      );
  }

}
