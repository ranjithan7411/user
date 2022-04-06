import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   public products  = [] as any;
  imgVisible = true;
  constructor( ) {  }
      
  
  ngOnInit(): void {
    
  }

  changeView(){
    this.imgVisible = false
    
  }
   myIndex = 0;


}

