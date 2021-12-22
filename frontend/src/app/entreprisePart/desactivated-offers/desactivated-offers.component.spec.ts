import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivatedOffersComponent } from './desactivated-offers.component';

describe('DesactivatedOffersComponent', () => {
  let component: DesactivatedOffersComponent;
  let fixture: ComponentFixture<DesactivatedOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesactivatedOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesactivatedOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
