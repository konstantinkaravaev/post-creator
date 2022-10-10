import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RandomColorDirective } from './random-color.directive';

@Directive({
  selector: '[appBorderAppear]',
})
export class BorderAppearDirective {
  constructor(private el: ElementRef, private r: Renderer2) {}

  @HostListener('mouseenter', ['$event']) onEnter(e: Event) {
    this.r.setStyle(e.target, 'outline', `2px dashed ${this.randomColor()}`);
  }

  @HostListener('mouseleave', ['$event']) onLeave(e: Event) {
    this.r.setStyle(e.target, 'outline', null);
  }

  randomColor() {
    return `rgb(${this.randomNumber()}, ${this.randomNumber()}, ${this.randomNumber()})`;
  }

  randomNumber() {
    return Math.floor(Math.random() * 255) + 0;
  }
}
