import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  loadProfileService(uid)
  {
    
    return this.http.get("https://localhost:5001/profile/details/"+uid);
  }
  editProfileService(user:any)
  {
   
    console.log("inside service ed");
    console.log(user);
    return this.http.put("https://localhost:5001/profile/EditProfile/",user);
  }
}
