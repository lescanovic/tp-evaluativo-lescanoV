import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IluminadorComponent } from './iluminador.component';

describe('IluminadorComponent', () => {
  let component: IluminadorComponent;
  let fixture: ComponentFixture<IluminadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IluminadorComponent]
    });
    fixture = TestBed.createComponent(IluminadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
