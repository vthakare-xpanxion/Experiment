import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminOrdersService } from 'src/app/services/admin-orders.service';

@Component({
  selector: 'app-current-orders',
  templateUrl: './current-orders.component.html',
  styleUrls: ['./current-orders.component.css']
})
export class CurrentOrdersComponent implements OnInit 
{

  orderng = false;
  Orders;
  aid: any;
  constructor(private _service: AdminOrdersService, private route: Router, private Aroute: ActivatedRoute) { }

  ngOnInit() 
  {
    this._service.loadOrders("Pending")
      .subscribe
      (
        res => {
                 this.Orders = res;
                 console.log(this.Orders);
          
              },
        err => {
                 console.log(err);
                }
      );
  }

  Change(oid:any)
  {
      
    this._service.change(oid).subscribe(
      res =>{ this.ngOnInit()}
    );

  }
}
