import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererpatientsComponent } from './gererpatients.component';

describe('GererpatientsComponent', () => {
  let component: GererpatientsComponent;
  let fixture: ComponentFixture<GererpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererpatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
