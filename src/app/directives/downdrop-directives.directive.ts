import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDowndropDirectives]'
})
export class DowndropDirectivesDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elfRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elfRef: ElementRef) { }
}
