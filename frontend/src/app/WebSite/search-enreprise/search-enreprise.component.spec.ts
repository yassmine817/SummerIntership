import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEnrepriseComponent } from './search-enreprise.component';

describe('SearchEnrepriseComponent', () => {
  let component: SearchEnrepriseComponent;
  let fixture: ComponentFixture<SearchEnrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEnrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEnrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
