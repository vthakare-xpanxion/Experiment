import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private _service : ProfileService, private route : Router,private Aroute: ActivatedRoute) { }


  uid;
  userhold : any = {}
  
  ngOnInit() 
  {
    
    this.uid = localStorage.getItem("userId");
    this._service.loadProfileService(this.uid)
    .subscribe(
      res => {
        this.userhold =  res;
        console.log(this.userhold);

      },
      err => {
        console.log(err);
      }
      );
  }

  editProfile(user:any)
  {
    
    console.log("sssssss");
    console.log(user.value);
    console.log("eeeee");
    user.value.userId = this.uid
      
    this._service.editProfileService(user.value)
    .subscribe(res =>{
      console.log(res)
      this.route.navigate(["/profile"]);      
    },err => {console.log(err)});
  }


}
