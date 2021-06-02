import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  itemImageUrl = '../assets/img/logo-bootstrap-shoping-cart.png';
  cutter = 'Twitter Bootstrap shopping cart HTML template is available @ $14';
  mobileNumber = '0800 1234 678';
  navLinks = [
    { path:"Dashboard", desc: "Home"},
    { path:"home", desc: "List View"},
    { path:"home", desc: "Grid View"},
    { path:"home", desc: "Three Column"},
    { path:"home", desc: "Four Column"},
    { path:"home", desc: "General Content"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
