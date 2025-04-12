import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailResidenceComponent } from './detail-residence.component';

describe('DetailResidenceComponent', () => {
  let component: DetailResidenceComponent;
  let fixture: ComponentFixture<DetailResidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailResidenceComponent]
    });
    fixture = TestBed.createComponent(DetailResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
