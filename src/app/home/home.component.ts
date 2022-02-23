import { Component, OnInit } from '@angular/core';
import Cities from '../../assets/data.json'
import { City } from "../city";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //initial location
  lat: number = 40.02179;
  lng: number = -105.21771;
  zoom: number = 5;
  display='none';

  cities: City[] = []

  //constructor(private cityService: CityService) { }
  constructor() {
  }

  ngOnInit(): void {

  }

  //read in markers from JSON file and add to map
  markerList:{name:string, st:string, lat:number, lng:number, id:number, description:string, img:string} [] = Cities
  addMarker(name:string, st:string, lat: number, lng: number, id:number, description:string, img:string) {
    this.markerList.push({name, st, lat, lng, id, description, img});
  }
}
