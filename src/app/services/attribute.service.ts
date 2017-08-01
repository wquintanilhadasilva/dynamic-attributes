import { Injectable } from '@angular/core';

@Injectable()
export class AttributeService {

  constructor() { }

  public getAttributes(): IAttribute[] {
    /**
     * Gera uma lista mock de atriutos para teste
     */
    const returnList = [
      {attribName: 'class',   attribValue: 'btn btn-default'},
      {attribName: 'width',   attribValue: '300px'},
      {attribName: 'style',   attribValue: 'text-align:center'}
    ];

    return returnList;
  }

}
