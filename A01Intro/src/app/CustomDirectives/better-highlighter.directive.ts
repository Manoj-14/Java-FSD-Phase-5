import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]',
})
export class BetterHighlighterDirective implements OnInit {
  @HostBinding('style.backgroundColor')
  backgroundColor: string = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'lightblue'
    // );
  }

  @HostListener('mouseenter')
  mouseover(evetentdata: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'lightblue'
    // );
    this.backgroundColor = 'orange';
  }

  @HostListener('mouseleave')
  mouseleave(evetentdata: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = 'transparent';
  }
}
