import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdoptionComponent } from './view-adoption.component';

describe('ViewAdoptionComponent', () => {
  let component: ViewAdoptionComponent;
  let fixture: ComponentFixture<ViewAdoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdoptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
