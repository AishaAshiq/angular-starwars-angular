import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router) { }

  public categoryList:Array<string> = [
    "Characters",
    "Films",
    "Species",
    "Starship",
    "Vehicles",
    "Planets",
];

  ngOnInit() {
  }

  btnClick(name :  string)
  {
    this.router.navigateByUrl("/category/${name}");
  }

}
