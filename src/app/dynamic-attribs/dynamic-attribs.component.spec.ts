import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicAttribsComponent } from './dynamic-attribs.component';

describe('DynamicAttribsComponent', () => {
  let component: DynamicAttribsComponent;
  let fixture: ComponentFixture<DynamicAttribsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicAttribsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicAttribsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
