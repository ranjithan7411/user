import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isVisible=true

  constructor() { }

  ngOnInit(): void {
  }

  
  changeView(){
     this.isVisible = false
   }




}