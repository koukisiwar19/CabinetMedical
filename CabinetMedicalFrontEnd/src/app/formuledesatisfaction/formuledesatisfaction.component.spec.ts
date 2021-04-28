import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuledesatisfactionComponent } from './formuledesatisfaction.component';

describe('FormuledesatisfactionComponent', () => {
  let component: FormuledesatisfactionComponent;
  let fixture: ComponentFixture<FormuledesatisfactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuledesatisfactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuledesatisfactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
