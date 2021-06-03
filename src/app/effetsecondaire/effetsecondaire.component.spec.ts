import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EffetsecondaireComponent } from './effetsecondaire.component';

describe('EffetsecondaireComponent', () => {
  let component: EffetsecondaireComponent;
  let fixture: ComponentFixture<EffetsecondaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EffetsecondaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffetsecondaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
