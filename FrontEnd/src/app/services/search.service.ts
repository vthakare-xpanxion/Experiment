import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  loadproducts(seacrh)
  {
    console.log("inside serv"+seacrh);
    if(seacrh != undefined)
    {
      console.log("search = "+ seacrh);
      return this.http.get("https://localhost:5001/home/"+seacrh);  
    }
    else
    {
      console.log("search undef = "+ seacrh);
      return this.http.get("https://localhost:5001/home/"+seacrh);
    }
  }

  loadcatproducts(seacrh)
  {
    console.log("inside serv"+seacrh);
    if(seacrh != undefined)
    {
      console.log("search = "+ seacrh);
      return this.http.get("https://localhost:5001/category/search/"+seacrh);  
    }
    else
    {
      console.log("search undef = "+ seacrh);
      return this.http.get("https://localhost:5001/home/"+seacrh);
    }
  }

}
