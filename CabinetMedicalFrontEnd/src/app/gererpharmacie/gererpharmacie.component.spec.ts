import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererpharmacieComponent } from './gererpharmacie.component';

describe('GererpharmacieComponent', () => {
  let component: GererpharmacieComponent;
  let fixture: ComponentFixture<GererpharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererpharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererpharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
