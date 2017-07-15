import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDriven2Component } from './data-driven2.component';

describe('DataDriven2Component', () => {
  let component: DataDriven2Component;
  let fixture: ComponentFixture<DataDriven2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDriven2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDriven2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
