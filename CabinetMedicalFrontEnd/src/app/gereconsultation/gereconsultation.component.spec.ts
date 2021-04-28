import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GereconsultationComponent } from './gereconsultation.component';

describe('GereconsultationComponent', () => {
  let component: GereconsultationComponent;
  let fixture: ComponentFixture<GereconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GereconsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GereconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
