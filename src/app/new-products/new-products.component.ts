import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent implements OnInit {

  imageLinks = [
    {path:"#", src:" assets/img/e.jpg", title:"bangle"},
    {path:"#", src:" assets/img/f.jpg", title:"bangle"},
    {path:"#", src:" assets/img/g.jpg", title:"bangle"},
    {path:"#", src:" assets/img/h.jpg", title:"bangle"},
  ];
  cartLinks = [
    {path:"#", desc:"Add to wish list"},
    {path:"#", desc:"Add to compare"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
