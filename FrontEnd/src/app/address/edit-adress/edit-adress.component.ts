import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-adress',
  templateUrl: './edit-adress.component.html',
  styleUrls: ['./edit-adress.component.css']
})
export class EditAdressComponent implements OnInit {

  constructor(private _service : AddressService, private route : Router,private Aroute: ActivatedRoute) { }


  aid;
  addresshold : any = {}
  
  ngOnInit() 
  {
    
    this.aid = this.Aroute.snapshot.params.aid;
    this._service.loadAddressService(this.aid)
    .subscribe(
      res => {
        this.addresshold =  res;
        console.log(this.addresshold);

      },
      err => {
        console.log(err);
      }
      );
  }

  editAddress(address: any)
  {
    
    console.log("sssssss");
    console.log(address.value);
    console.log("eeeee");
    address.value.addressId = this.aid;
    address.value.userId = localStorage.getItem("userId");
      
    this._service.editAddressService(address.value)
    .subscribe(res =>{
      console.log(res)
      this.route.navigate(["/address"]);      
    },err => {console.log(err)});
  }



}