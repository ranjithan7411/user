import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    alert("Added successfully");
  }

}
