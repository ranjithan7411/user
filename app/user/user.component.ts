import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isVisible=true

  constructor() { }

  ngOnInit(): void {
  }

  
  changeView(){
     this.isVisible = false
   }
  
}