import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public  selectedHotel: any = {
    id: 1, 
    name: 'Resort Address1',
    imgBig: "/src/app/components/hotels/images/" + '1.jpg',
    desc01: 'Sed perspiciatis',
    desc02: 'Et harum quidem',
    phone: '1285 968 685',
    imgUrl01: "/src/app/components/hotels/images/" + '1.jpg',
    imgUrl02: "/src/app/components/hotels/images/" + 'res.jpg',
    followers : 321,
    following : 12234};

  qwert(x) { 
this.selectedHotel = x; }
}

