import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weath: number | string = 0;
  public water: number | string = 0;
  public inervalweath;
  public inervalwater;
  @Input()
  set select(as: number) {    
      this.stopRandomWeather();
      this.startRandomWeather();
  }
  constructor() { }

  stopRandomWeather() { 
    clearInterval(this.inervalweath); 
    this.weath = 0; 
    clearInterval(this.inervalwater); 
    this.water = 0; }
  startRandomWeather() {
    this.inervalweath = setInterval(() => {
      this.weath = Math.floor(Math.random() * (30 - (-30))) + (-30);}, 5000);
      if (this.weath > 0) {this.weath = "+" + this.weath; }
  this.inervalwater = setInterval(() => {
    this.water = Math.floor(Math.random() * (30 - (3))) + (3);
    if (this.water > 0) {this.water = "+" + this.water; }
  }, 5000); }

  ngOnInit() {}

}
