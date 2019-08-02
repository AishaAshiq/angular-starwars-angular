import { Component, OnInit } from '@angular/core';
import { UrlPathService } from "../url-path.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Location } from '@angular/common';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Message } from "../message";

@Component({
  selector: 'app-individual-details',
  templateUrl: './individual-details.component.html',
  styleUrls: ['./individual-details.component.css']
})

export class IndividualDetailsComponent implements OnInit {

  displaydata:any; 
  passedval :  string;
  species: string;
  residents : Array<string>;
  homeworld: string;
  urldata:any;
  i: number;
  commentForm: FormGroup;
  localcomment: Message;
  public message: Array<Message>;
  jsonMessage: any=[];
  initialretrieve: number;

  constructor(private router: Router, private pathService: UrlPathService, 
    private route: ActivatedRoute, private location: Location, private  httpClient:  HttpClient, private fb: FormBuilder) { }

  ngOnInit() {

    const name = this.route.snapshot.paramMap.get('name');
    this.passedval = name;
    this.species = null;
    this.homeworld = null;
    this.residents = [];
    this.message = [];
    this.initialretrieve =0;
    this.localcomment = new Message();

    this.commentForm = this.fb.group({
      username: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required)
   });

    this.displaydata = <any> JSON.parse(sessionStorage.getItem('res'));
    this.getdata_Session();

    console.log(this.message);

    if(name == 'Characters')
    {
      this.getdata(this.displaydata.species, null);
      this.getdata(this.displaydata.homeworld, null);
    }
    else if(name == 'Species')
    {
      this.getdata(this.displaydata.homeworld, null);
    }
    else if(name == 'Planets')
    {
      this.getdata(this.displaydata.residents, "residents");
    }
    console.log(this.displaydata);
  }

  onSubmit() 
  {
    console.log(this.commentForm);
    if(this.displaydata != null)
    {
      this.localcomment.name = this.commentForm.get('username').value;
      this.localcomment.text = this.commentForm.get('text').value;
      if(this.passedval == "Films")
        this.localcomment.categoryname = this.displaydata.name;
      else
        this.localcomment.categoryname = this.displaydata.title;

      this.getdata_Session();

        if(this.jsonMessage != null)
          this.message.push(this.localcomment);
        else
          this.message = Array.of(this.localcomment);

      sessionStorage.setItem('messagelist', JSON.stringify(this.message));
    }
  }

  getdata_Session()
  {
    this.jsonMessage = JSON.parse(sessionStorage.getItem('messagelist'));
      if(this.jsonMessage != null)
      {
        // this.message = [];
        // this.message = Array.of(Object.assign({}, this.jsonMessage));
        this.message = this.jsonMessage;
        // this.initialretrieve++;
      }
  }

  getdata(url: any, type: string)
  {
    if(type == null)
    {
      if(!Array.isArray(url))
      {
        this.pathService.fetchdata(url).subscribe((data: any)=> 
        {
          console.log(data);
          if(data != null)
          {
            this.homeworld = data.name;
          }
        },
        (err)=>
        {
          console.log(err);
        });
        return this.urldata;
      }

      else
      {
        for(this.i=0; this.i<url.length; this.i++)
        {
          this.pathService.fetchdata(url[this.i]).subscribe((data: any)=> 
          {
            console.log(data);
            if(data != null)
            {
              this.species = data.name;
            }
          },
          (err)=>
          {
            console.log(err);
          });
          
        }
      }
    }
    else
    {
      for(this.i=0; this.i<url.length; this.i++)
      {
        this.pathService.fetchdata(url[this.i]).subscribe((data: any)=> 
        {
          console.log(data);
          if(data != null)
          {
            this.residents.push(data.name);
          }
        },
        (err)=>
        {
          console.log(err);
        });
    }
  }
}
}


