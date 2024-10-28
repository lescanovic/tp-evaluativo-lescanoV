import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SombrasComponent } from './sombras.component';

describe('SombrasComponent', () => {
  let component: SombrasComponent;
  let fixture: ComponentFixture<SombrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SombrasComponent]
    });
    fixture = TestBed.createComponent(SombrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
