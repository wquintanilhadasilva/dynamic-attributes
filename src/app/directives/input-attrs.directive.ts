import { Directive, ElementRef } from '@angular/core';

import { AttributeService } from './../services/attribute.service';

@Directive({
  selector: '[appInputAttrs]'
})
export class InputAttrsDirective {

  constructor(el: ElementRef, service: AttributeService) {
    console.log(el);
    service.getAttributes().forEach( (a: IAttribute) => {
      console.log(a);
      el.nativeElement.setAttribute(a.attribName, a.attribValue);
    });

  }

}
