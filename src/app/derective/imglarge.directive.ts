import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appImglarge]'
})
export class ImglargeDirective {
 
  @HostBinding('style.width') width = 'auto';
  @HostBinding('style.height') height = 'auto';
  @HostBinding('style.max-width') maxWidth = '100%';
  @HostBinding('style.position') posit ;

  @HostListener('mouseover') onImgOver() {
    this.width = this.height = '183%';
    this.maxWidth = 'none';
    this.posit = 'relative';
  }

  @HostListener('mouseout') onImgOut() {
    this.width = this.height = this.maxWidth = '100%';
    this.posit = 'relative';
  }
}
