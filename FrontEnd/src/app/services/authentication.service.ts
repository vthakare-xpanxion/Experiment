import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //token: string;
  
  constructor(private http:HttpClient) { }

  register(user: any) {
    console.log("inside register service");
    //return null;
    
    return this.http.post("https://localhost:5001/user/register",user)
  }

  getQuestions() 
  {
    console.log("inside ques service");
    return this.http.get("https://localhost:5001/user/question")
  }

  isAdminAuthenticated(){
    if(localStorage.getItem('role')== 'admin')
    return true;
    else  
    return false;
  }

  isUserAuthenticated(){
    if(localStorage.getItem('role')== 'customer')
    return true;
    else  
    return false;
  }

  isAnonymousLoggedIn(){
    if(localStorage.getItem('role')== null || localStorage.getItem('role')== "anonymous")
    return true;
    else  
    return false;
  }

  forgotlogin(user):Observable<any>
  {
    return this.http.get("https://localhost:5001/user/forgotlogin/"+user.EmailId);
  }
  login(user):Observable<any>{
   

    return this.http.get("https://localhost:5001/user/login/"+user.EmailId+"/"+user.Password)
  
   
  }
  details(uid)
  {
    return this.http.get("https://localhost:5001/user/details/"+uid)
  }

  ans(user)
  {
    
    return this.http.post("https://localhost:5001/user/security/",user)
  }
}
