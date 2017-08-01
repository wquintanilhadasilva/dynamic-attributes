import { Directive, ElementRef } from '@angular/core';

import { AttributeService } from './../services/attribute.service';

@Directive({
  selector: '[appInputAttrs]'
})
export class InputAttrsDirective {

  constructor(el: ElementRef, service: AttributeService) {
    /**
     * Adiciona os atributos ao elemento passado como referência
     */
    service.getAttributes().forEach( (a: IAttribute) => {
      el.nativeElement.setAttribute(a.attribName, a.attribValue);
    });

  }

}
