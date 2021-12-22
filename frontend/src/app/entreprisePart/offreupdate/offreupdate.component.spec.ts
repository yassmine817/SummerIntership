import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreupdateComponent } from './offreupdate.component';

describe('OffreupdateComponent', () => {
  let component: OffreupdateComponent;
  let fixture: ComponentFixture<OffreupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
