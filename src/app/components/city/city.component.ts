import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
public URL;

@Input() select;

  constructor() {
    

this.URL = '/src/app/components/hotels/images/1.jpg';

  }

  ngOnInit() {  }

}
