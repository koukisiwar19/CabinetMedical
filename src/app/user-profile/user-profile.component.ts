import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
element ='';
  constructor() { }
  ngOnInit(): void {
  }
  selected (select)
  {
    this.element =select.value;
  }
}
 

 


