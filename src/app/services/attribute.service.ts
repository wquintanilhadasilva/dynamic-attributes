import { Injectable } from '@angular/core';

@Injectable()
export class AttributeService {

  constructor() { }

  public getAttributes(): IAttribute[] {
    const returnList = [
      {attribName: 'class',   attribValue: 'btn btn-default'},
      {attribName: 'width',   attribValue: '300px'},
      {attribName: 'style',   attribValue: 'text-align:center'}
    ];

    return returnList;
  }

}
