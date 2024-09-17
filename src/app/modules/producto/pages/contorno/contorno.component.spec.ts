import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContornoComponent } from './contorno.component';

describe('ContornoComponent', () => {
  let component: ContornoComponent;
  let fixture: ComponentFixture<ContornoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContornoComponent]
    });
    fixture = TestBed.createComponent(ContornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
