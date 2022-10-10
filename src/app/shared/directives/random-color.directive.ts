import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRandomColor]',
})
export class RandomColorDirective {
  constructor(private el: ElementRef, private r: Renderer2) {
    this.r.setStyle(el.nativeElement, 'backgroundColor', this.randomColor());
  }

  randomColor() {
    return `rgba(${this.randomNumber()}, ${this.randomNumber()}, ${this.randomNumber()}, 0.5)`;
  }

  randomNumber() {
    return Math.floor(Math.random() * 255) + 0;
  }
}
