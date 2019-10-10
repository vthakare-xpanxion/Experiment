import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  myid;
  constructor(private ac: ActivatedRoute) 
  {

  }

  ngOnInit() 
  {
    this.myid = this.ac.snapshot.params['id'];
  }

}
