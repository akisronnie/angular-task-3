import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelbyclick'
})
export class HotelbyclickPipe implements PipeTransform {
public filt:any;
  transform(hotels: any, city: any): any {
    this.filt =  hotels.filter(hotel => ~hotel.desc01.indexOf(city));
return this.filt;
} }
