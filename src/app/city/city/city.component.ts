import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from "../../city"
import Cities from '../../../assets/data.json'


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  //get city list
  cities:{name:string, st:string, lat:number, lng:number, id:number, description:string, img:string} [] = Cities;
  //set city to first in list
  city: City = this.cities[0];
  //router constructor
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //iterate through cities until current city is found
    this.cities.forEach((c: City) =>{
      if(c.id == this.route.snapshot.params["id"]) {
        this.city = c;
        console.log(this.city.name)
      }
    });

  }

}
