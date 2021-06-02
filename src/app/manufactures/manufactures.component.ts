import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufactures',
  templateUrl: './manufactures.component.html',
  styleUrls: ['./manufactures.component.css']
})
export class ManufacturesComponent implements OnInit {
  imageLinks = [
    {path:"#", src:"assets/img/1.png", title:"image"},
    {path:"#", src:"assets/img/2.png", title:"image"},
    {path:"#", src:"assets/img/3.png", title:"image"},
    {path:"#", src:"assets/img/4.png", title:"image"},
    {path:"#", src:"assets/img/5.png", title:"image"},
    {path:"#", src:"assets/img/6.png", title:"image"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
