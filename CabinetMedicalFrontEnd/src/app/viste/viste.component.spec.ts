import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisteComponent } from './viste.component';

describe('VisteComponent', () => {
  let component: VisteComponent;
  let fixture: ComponentFixture<VisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
