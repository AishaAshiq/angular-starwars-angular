import { Component, OnInit } from '@angular/core';
import { UrlPathService } from "../url-path.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-items-category',
  templateUrl: './items-category.component.html',
  styleUrls: ['./items-category.component.css']
})
export class ItemsCategoryComponent implements OnInit {

  constructor(private router: Router, private pathService: UrlPathService, 
      private route: ActivatedRoute, private location: Location) { }

  passedval :  string;
  resultdata: any;
  displaydata : any;

  ngOnInit() {

    const name = this.route.snapshot.paramMap.get('name');
    
    this.passedval = name;

    this.fetchdata(name);
  }

  navig(result: any)
  {
    sessionStorage.setItem('res', JSON.stringify(result));
    this.router.navigateByUrl("/category/"+this.passedval +"/"+ result.name);
  }

  fetchdata(name: string)
  {      
    if(name == "Characters")
      this.fetchCharacters();
    
    else if(name == "Films")
      this.fetchFilms();
    
    else if(name == "Species")
      this.fetchSpecies();
    
    else if(name == "Starship")
      this.fetchStarship();
    
    else if(name == "Vehicles")
      this.fetchVehicles();
    
    else if(name == "Planets")
      this.fetchPlanets();
  }

  fetchCharacters()
  {
    this.pathService.fetchCharacters().subscribe((data: any)=> 
    {
      console.log(data);
      if(data != null)
      {
        this.displaydata = data;
      }
    },
    (err)=>
    {
      console.log(err);
    });
  }

  fetchFilms()
  {
    this.pathService.fetchFilms().subscribe((data: any)=> 
    {
      if(data != null)
      {
        this.displaydata = data;
      }
    },
    (err)=>
    {
      console.log(err);
    });
  }

  fetchSpecies()
  {
    this.pathService.fetchSpecies().subscribe((data: any)=> 
    {
      if(data != null)
      {
        this.displaydata = data;
      }
    },
    (err)=>
    {
      console.log(err);
    });
  }

  fetchStarship()
  {
    this.pathService.fetchStarships().subscribe((data: any)=> 
    {
      if(data != null)
      {
        this.displaydata = data;
      }
    },
    (err)=>
    {
      console.log(err);
    });
  }

  fetchVehicles()
  {
    this.pathService.fetchVehicles().subscribe((data: any)=> 
    {
      if(data != null)
      {
        this.displaydata = data;
      }
    },
    (err)=>
    {
      console.log(err);
    });
  }

  fetchPlanets()
  {
    this.pathService.fetchPlanets().subscribe((data: any)=> 
    {
      if(data != null)
      {
        this.displaydata = data;
      }
    },
    (err)=>
    {
      console.log(err);
    });
  }
}
