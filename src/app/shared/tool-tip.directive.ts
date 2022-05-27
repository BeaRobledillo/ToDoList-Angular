import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit, OnChanges {

  @Input('appToolTip') tooltipContent: string;

 public tippyInstance: any;

  constructor(private elRef: ElementRef) {  }

  ngAfterViewInit(){
      this.tippyInstance= tippy(this.elRef.nativeElement,{
      content: this.tooltipContent
    })
  }
ngOnChanges(changes:SimpleChanges) {
    //console.log('inside ng on changes')

    if(changes['tooltipContent']){ //input content has changed
      //console.log('testing')
      this.updateToolTipContent()
    }
}
updateToolTipContent(){
  if(this.tippyInstance){
    this.tippyInstance.setContent(this.tooltipContent)
  }
}

}
