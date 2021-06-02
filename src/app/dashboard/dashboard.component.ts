import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sideBarLinks = [
    { path:"#fashion", desc:"Fashion"},
    { path:"#watches", desc:"Watches"},
    { path:"#finejewelry", desc:"Fine Jewelry"},
    { path:"#fashionjewelry", desc:"Fashion Jewelry"},
    { path:"#engagement&Wedding", desc:"Engagement & Wedding"},
    { path:"#men'sJewelry", desc:"Men's Jewelry"},
    { path:"#Vintage&Antique", desc:"Vintage & Antique"},
    { path:"#loosediamonds", desc:"Loose Diamonds"},
    { path:"#loosebeads", desc:"Loose Beads"},
    { path:"#alljewelry", desc:"See All Jewelry & Watches"}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
