import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
 
 public HotelBase: {}[] = [
  {
      id: 1, 
      name: 'Resort Address1',
      imgBig: '/src/app/components/hotels/images/1.jpg',
      desc01: 'Kiev',
      desc02: 'Et harum quidem',
      phone: '1285 968 685',
      imgUrl01: '/src/app/components/hotels/images/1.jpg',
      imgUrl02: '/src/app/components/hotels/images/res.jpg',
      followers : 321,
      following : 12234
  },
  {
      id: 2, 
      name: 'Resort Address2',
      imgBig: '/src/app/components/hotels/images/2.jpg',
      desc01: 'Kharkov',
      desc02: 'Et harum quidem',
      phone: '1285 968 685',
      imgUrl01: '/src/app/components/hotels/images/2.jpg',
      imgUrl02: '/src/app/components/hotels/images/res.jpg',
      followers : 3434,
      following : 1434344
  },
  {
      id: 3, 
      name: 'Resort Address3',
      imgBig: '/src/app/components/hotels/images/3.jpg',
      desc01: 'Kharkov',
      desc02: 'Et harum quidem',
      phone: '1285 968 685',
      imgUrl01: '/src/app/components/hotels/images/3.jpg',
      imgUrl02: '/src/app/components/hotels/images/res.jpg',
      followers : 55521,
      following : 1454534
  },
  {
      id: 4, 
      name: 'Resort Address4',
      imgBig: '/src/app/components/hotels/images/4.jpg',
      desc01: 'Odessa',
      desc02: 'Et harum quidem',
      phone: '1285 968 685',
      imgUrl01: '/src/app/components/hotels/images/4.jpg',
      imgUrl02: '/src/app/components/hotels/images/res.jpg',
      followers : 3141,
      following : 14444
  },
  {
      id: 5, 
      name: 'Resort Address5',
      imgBig: '/src/app/components/hotels/images/5.jpg',
      desc01: 'Odessa',
      desc02: 'Et harum quidem',
      phone: '1285 968 685',
      imgUrl01: '/src/app/components/hotels/images/5.jpg',
      imgUrl02: '/src/app/components/hotels/images/res.jpg',
      followers : 321,
      following : 12234
  },
  {id: 6, 
  name: 'Resort Address6',
  imgBig: '/src/app/components/hotels/images/1.jpg',
  desc01: 'Odessa',
  desc02: 'Et harum quidem',
  phone: '1285 968 685',
  imgUrl01: '/src/app/components/hotels/images/1.jpg',
  imgUrl02: '/src/app/components/hotels/images/res.jpg',
  followers : 321,
  following : 12234
},
{
  id: 7, 
  name: 'Resort Address7',
  imgBig: '/src/app/components/hotels/images/2.jpg',
  desc01: 'Sed city',
  desc02: 'Et harum quidem',
  phone: '1285 968 685',
  imgUrl01: '/src/app/components/hotels/images/2.jpg',
  imgUrl02: '/src/app/components/hotels/images/res.jpg',
  followers : 3434,
  following : 1434344
},
{
  id: 8, 
  name: 'Resort Addres8',
  imgBig: '/src/app/components/hotels/images/3.jpg',
  desc01: 'Sed perspiciatis',
  desc02: 'Et harum quidem',
  phone: '1285 968 685',
  imgUrl01: '/src/app/components/hotels/images/3.jpg',
  imgUrl02: '/src/app/components/hotels/images/res.jpg',
  followers : 55521,
  following : 1454534
},
{
  id: 9, 
  name: 'Resort Address9',
  imgBig: '/src/app/components/hotels/images/4.jpg',
  desc01: 'Sed perspiciatis',
  desc02: 'Et harum quidem',
  phone: '1285 968 685',
  imgUrl01: '/src/app/components/hotels/images/4.jpg',
  imgUrl02: '/src/app/components/hotels/images/res.jpg',
  followers : 3141,
  following : 14444
},
{
  id: 10, 
  name: 'Resort Address10',
  imgBig: '/src/app/components/hotels/images/5.jpg',
  desc01: 'Sed city',
  desc02: 'Et harum quidem',
  phone: '1285 968 685',
  imgUrl01: '/src/app/components/hotels/images/5.jpg',
  imgUrl02: '/src/app/components/hotels/images/res.jpg',
  followers : 321,
  following : 12234
}
];
 public selectedHotel: {};
 public city: string = '';
 public bigUrl: string = '/src/app/components/hotels/images/1.jpg';
 public finder: string;
 @Output() qwert = new EventEmitter();
 
 onHotel(hotel) {
      this.qwert.emit(hotel);
      this.selectedHotel = hotel;
      this.bigUrl = hotel.imgBig;
   }
   filterByCity (city){ this.city = city; }
   filtered (inputValue) { this.city = inputValue;}
  ngOnInit() {  }
}
