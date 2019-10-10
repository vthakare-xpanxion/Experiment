import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit
 {
    uid = localStorage.getItem("userId");
    rem;
    constructor(private _service : AddressService, private route : Router,private Aroute: ActivatedRoute) { }

    ngOnInit() 
    {
      this.rem = this.Aroute.snapshot.params.id;
      console.log("in add => "+ this.rem);
    }
  
    addAddress(address:NgForm)
    {
      
      console.log(address.value);
      address.value.userId = this.uid;
      
      this._service.addAddressService(address.value)
      .subscribe(res =>
      {
        console.log("1.inside added");
        if(this.rem == '2')
        {
          this.route.navigate(["/orderConfirm"])
        }
        else
        {this.route.navigate(["/address"])}
        
      },err => {console.log(err)});
      
    }

  
}
