import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExsolovinosComponent } from './exsolovinos.component';

describe('ExsolovinosComponent', () => {
  let component: ExsolovinosComponent;
  let fixture: ComponentFixture<ExsolovinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExsolovinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExsolovinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
