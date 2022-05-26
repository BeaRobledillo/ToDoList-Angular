import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) {  }

  ngAfterViewInit(){
    tippy(this.elRef.nativeElement,{
      content: 'Edit Todo'
    })
  }

}
