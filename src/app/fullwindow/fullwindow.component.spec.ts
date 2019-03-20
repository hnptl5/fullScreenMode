import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullwindowComponent } from './fullwindow.component';

describe('FullwindowComponent', () => {
  let component: FullwindowComponent;
  let fixture: ComponentFixture<FullwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
