import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HungeryComponent } from './hungery.component';

describe('HungeryComponent', () => {
  let component: HungeryComponent;
  let fixture: ComponentFixture<HungeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HungeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HungeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
