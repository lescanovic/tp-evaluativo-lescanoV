import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuboresComponent } from './rubores.component';

describe('RuboresComponent', () => {
  let component: RuboresComponent;
  let fixture: ComponentFixture<RuboresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuboresComponent]
    });
    fixture = TestBed.createComponent(RuboresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
